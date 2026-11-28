import { notFound } from "next/navigation";
import { buildMetadata } from "@/seo/pageMetadata";
import { JsonLd, BreadcrumbJsonLd } from "@/seo/JsonLd";
import BlogSSRBody from "@/components/BlogSSRBody";
import { articleParts, faqParts } from "@/seo/blogText";

const SITE = "https://www.adiance.com";
const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";

function titleFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Flatten the CMS rich-text shape — [{ type, children: [{ text }] }] — into
 * plain text so it can be used in a meta description or FAQ answer.
 */
function richText(value) {
  if (!value) return "";
  if (typeof value === "string") return value.replace(/\s+/g, " ").trim();
  const nodes = Array.isArray(value) ? value : [value];
  return nodes
    .map((node) =>
      Array.isArray(node?.children)
        ? node.children.map((child) => clean(child?.text)).join("")
        : clean(node?.text),
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function summarise(text, max = 155) {
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}

function ogImageFor(mainImage) {
  const raw = clean(mainImage);
  if (!raw) return `${SITE}/images/Logo.webp`;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${BACKEND}/images/${raw.replace(/^\/?(images\/)?/, "")}`;
}

async function fetchBlog(slug) {
  if (!slug) return null;
  try {
    const res = await fetch(
      `${BACKEND}/api/blogs/urlWords/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    if (json?.status === "success" && json?.data?.metadata?.urlWords) {
      return json.data;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Like fetchBlog, but distinguishes a definitively-missing post (→ 404) from a
 * transient backend error (→ render the client shell as a fallback). This stops
 * dead/invalid posts serving a 200 empty shell (soft-404) without 404-ing a
 * real post just because the API blipped.
 */
async function resolveBlog(slug) {
  if (!slug) return { state: "notfound", blog: null };
  try {
    const res = await fetch(
      `${BACKEND}/api/blogs/urlWords/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (res.status === 404) return { state: "notfound", blog: null };
    if (!res.ok) return { state: "error", blog: null };
    const json = await res.json();
    if (json?.status === "success" && json?.data?.metadata?.urlWords) {
      return { state: "ok", blog: json.data };
    }
    return { state: "notfound", blog: null };
  } catch {
    return { state: "error", blog: null };
  }
}

/** Post-specific description, never the /blog index copy. */
function descriptionFor(blog) {
  return (
    clean(blog?.content?.metaDescription) ||
    clean(blog?.metadata?.metaDescription) ||
    summarise(richText(blog?.content?.brief)) ||
    undefined
  );
}

/**
 * ADI-018 (16 Nov 2026): many CMS posts have titles over 65 characters and
 * descriptions over 165, which Google cuts mid-word. Without inventing new
 * wording: drop the brand suffix from long titles, and end long descriptions
 * at the last full sentence (or word) before 160 characters.
 */
function fitTitle(title) {
  if (!title) return title;
  // ADI-018: some CMS titles contain the editor's note "... Meta title: <real title>".
  // Keep only the intended meta title after the label.
  const metaLabel = title.match(/\bMeta title:\s*(.+)$/i);
  if (metaLabel && metaLabel[1].trim().length >= 20) title = metaLabel[1].trim();
  if (title.length <= 65) return title;
  return title.replace(/\s*[|\-\u2013\u2014]\s*Adiance( Blog| Technologies)?\s*$/i, "").trim();
}

function fitDescription(text) {
  if (!text || text.length <= 165) return text;
  const head = text.slice(0, 160);
  const sentenceEnd = Math.max(head.lastIndexOf(". "), head.lastIndexOf("? "), head.lastIndexOf("! "));
  if (sentenceEnd >= 90) return head.slice(0, sentenceEnd + 1);
  const space = head.lastIndexOf(" ");
  return `${head.slice(0, space > 90 ? space : 157).replace(/[\s,;:.\-]+$/, "")}\u2026`;
}

/**
 * ADI-014 (2026-11-14): search-snippet overrides for CMS posts with many
 * impressions but a low click-through rate (GSC, 14 Oct - 10 Nov 2026).
 * These only replace the <title> and meta description Google shows; the
 * post itself is unchanged. Better long-term: update the same text in the
 * CMS and delete the entry here.
 */
const SNIPPET_OVERRIDES = {
  // 4,380 impressions, 0.9% CTR, position 10.8. Old title said "2025".
  "top-indian-cctv-camera-manufacturer": {
    title: "Top 7 CCTV Camera Manufacturers in India: Brands Compared",
    description:
      "Compare 7 Indian CCTV camera manufacturers, including Adiance and CP Plus: what each brand makes, its strengths and who it suits.",
  },
  // 1,342 impressions, 1.9% CTR, position 10.4.
  "ndaa-compliant-camera-list-2026": {
    title: "NDAA Compliant Camera List 2026: Which Brands Qualify",
    description:
      "Which security camera brands meet NDAA Section 889 in 2026, what the rule means, and the non-Chinese options US buyers and integrators can use.",
  },
  // 1,799 impressions, 1.3% CTR. CMS description was ~175 characters.
  "ndaa-compliant-cctv-cameras-complete-guide": {
    description:
      "Which CCTV brands are banned under NDAA Section 889, how to check a camera is compliant, and where to source NDAA-compliant cameras.",
  },
  // 1,381 impressions, 1.7% CTR. Searches: "cctv camera circuit board/diagram".
  "ai-cctv-camera-pcb-diagram": {
    title: "CCTV Camera PCB Diagram: Board Components & Design Explained",
    description:
      "A CCTV camera PCB diagram walkthrough: the main components on an AI camera board, how they work together, and what matters in the design.",
  },
  // ADI-036 (28 Nov 2026): 1,094 impressions, position 5.7, 0 clicks in 28
  // days (GSC, "hikvision" queries). Name the 5 brands the post compares.
  "hikvision-alternatives-ndaa-compliant-cameras-2026": {
    title: "Hikvision Alternatives 2026: 5 NDAA-Compliant Brands Compared",
    description:
      "Compare 5 Hikvision alternatives for 2026 (Adiance, Axis, Hanwha Vision, Bosch and i-PRO) on NDAA compliance, chipsets, certifications and OEM options.",
  },
  // ADI-035 note (27 Nov 2026): CMS title still said "| 2025". Drop the
  // out-of-date year; the rest of the title is unchanged.
  "ndaa-compliance-surveillance-cameras-explained": {
    title: "NDAA Compliance for Surveillance Cameras Explained",
  },
  // ADI-018 (20 Nov 2026): CMS meta titles over 65 characters get cut off in
  // search results. Same wording, shortened; the post headline is unchanged.
  "surveillance-market-opportunity-2026": {
    title: "2026 Surveillance Market: Time to Build Your Camera Brand",
  },
  "secure-compliant-video-management-system-enterprises": {
    title: "Why Enterprises Need a Secure, Compliant Video Management System",
  },
  "adiance-ifsec-india-2025": {
    title: "Adiance at IFSEC India 2025: CCTV Cameras & AI Surveillance",
  },
  "china-plus-one-strategy-cctv-manufacturing-india": {
    title: "China+1: Why Global Brands Move CCTV Manufacturing to India",
  },
  "ndaa-compliance-guide-global-cctv-brands": {
    title: "NDAA Compliance Guide for Global CCTV Brands: Why It Matters",
  },
  "white-label-surveillance-complete-ecosystem-cameras-vms-app-cloud": {
    title: "White-Label Surveillance: Why a Complete Ecosystem Wins",
  },
  "trusted-surveillance-technology-worldwide": {
    title: "Trusted Surveillance: Why the World Is Moving Beyond Cheap CCTV",
  },
  "adiance-bis-er-certified-manufacturer": {
    title: "BIS ER Certified CCTV Manufacturer in India | OEM & White Label",
  },
  "ultimate-guide-cctv-camera-chipsets-sigmastar": {
    title: "CCTV Camera Chipsets Guide: SigmaStar vs. the Competition",
  },
  "ndaa-compliant-security-cameras-government-projects": {
    title: "NDAA-Compliant Security Cameras for Government Projects",
  },
  "oem-camera-case-study-12-country-brand": {
    title: "Case Study: A 12-Country Camera Brand Built in 18 Months",
  },
  "edge-ai-vs-cloud-ai-in-surveillance": {
    title: "Edge AI vs Cloud AI in Surveillance: Which Is Right for You?",
  },
  "why-manufacturing-matters-in-surveillance": {
    title: "BIS-ER & STQC Certified CCTV: Why Manufacturing Matters",
  },
  "from-footage-to-foresight-operational-intelligence": {
    title: "From Footage to Foresight | STQC & BIS-ER Certified CCTV",
  },
  "india-vs-china-camera-manufacturing-2026": {
    title: "5 Reasons to Choose India Over China for Camera Manufacturing",
  },
  "smart-surveillance-smarter-india-arcisais-role-in-aidriven-security": {
    title: "ArcisAI Edge AI Surveillance: Smarter Security for India",
  },
  "what-apples-india-exports-mean-for-oem-odm": {
    title: "iPhone Exports Signal India’s Rise as an OEM/ODM Hub",
  },
  "choose-right-cctv-manufacturer-in-uae": {
    title: "How to Choose the Right CCTV Camera Manufacturer in UAE",
  },
  "taa-compliant-surveillance-cameras-government-guide": {
    title: "TAA Compliant Surveillance Cameras: 2026 Contractor Guide",
  },
  "top-10-questions-oem-camera-manufacturer": {
    title: "10 Questions to Ask Before Choosing an OEM Camera Manufacturer",
  },
  "edge-ai-cameras-oem-partners-on-device-intelligence": {
    title: "Edge AI Cameras for OEM Partners: On-Device vs Cloud",
  },
  "launch-camera-line-12-weeks": {
    title: "How to Launch Your Camera Line in 12 Weeks: Step-by-Step",
  },
  "how-to-launch-smart-home-camera-brand-oem-guide": {
    title: "How to Launch a Smart Home Camera Brand: Complete OEM Guide",
  },
  "union-budget-2026-impact-on-adiance": {
    title: "Union Budget 2026: OEM & ODM Electronics Manufacturing in India",
  },
};

export async function generateMetadata({ params }) {
  const slug = params?.urlTitle || "";
  const blog = await fetchBlog(slug);

  const cmsTitle =
    clean(blog?.content?.metaTitle) || clean(blog?.metadata?.metaTitle);
  const fallbackTitle = slug
    ? `${titleFromSlug(slug)} | Adiance Blog`
    : "Adiance Blog";

  const title = cmsTitle || clean(blog?.content?.title) || fallbackTitle;
  const tags = Array.isArray(blog?.content?.tags) ? blog.content.tags : [];
  const published = blog?.createdAt || undefined;
  const modified = blog?.updatedAt || blog?.createdAt || undefined;

  // Build against the post's own path, not "/blog" — keying off the index
  // route made every post inherit the blog index description and keywords.
  const snippet = SNIPPET_OVERRIDES[slug] || {};
  return buildMetadata(`/blog/${slug}`, {
    title: snippet.title || fitTitle(title),
    description: snippet.description || fitDescription(descriptionFor(blog)),
    canonical: `/blog/${slug}`,
    ogImage: ogImageFor(blog?.content?.mainImage),
    keywords: tags.length ? tags.join(", ") : undefined,
    ogType: "article",
    publishedTime: published,
    modifiedTime: modified,
    authors: [clean(blog?.content?.blogAuthor) || "Adiance Technologies"],
  });
}

/** FAQPage JSON-LD from the post's own FAQ block, when it has one. */
function faqSchema(blog) {
  const items = blog?.content?.faqs?.items;
  if (!Array.isArray(items)) return null;
  const mainEntity = items
    .map((item) => ({
      question: clean(item?.question),
      answer: richText(item?.answer),
    }))
    .filter((entry) => entry.question && entry.answer)
    .map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    }));
  if (!mainEntity.length) return null;
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity };
}

/**
 * Server-rendered article body (title + image + paragraphs) used as the SSR
 * fallback so the real content is in the initial HTML. Wrapped defensively —
 * any shape surprise returns null and we simply fall back to the client render.
 */
function ssrArticleBody(blog) {
  if (!blog) return null;
  try {
    const c = blog.content || {};
    const title = clean(c.metaTitle) || clean(c.title) || "";
    // `brief` is a short summary (string on current posts, Slate array on old ones).
    const briefText =
      typeof c.brief === "string" ? c.brief.trim() : richText(c.brief);
    // The full article body lives in `headingsAndImages`:
    // [{ type: "p" | "h2" | "h3" | ..., content: { text } }].
    // Serialised by seo/blogText.js: block text can be a string or an array of
    // rich-text nodes, and must never be stringified directly ("[object Object]").
    const rendered = articleParts(c.headingsAndImages).map((part, i) => {
      if (part.tag === "h2") return <h2 key={i}>{part.text}</h2>;
      if (part.tag === "h3") return <h3 key={i}>{part.text}</h3>;
      if (part.tag === "ul" || part.tag === "ol") {
        const List = part.tag;
        return (
          <List key={i}>
            {part.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </List>
        );
      }
      return <p key={i}>{part.text}</p>;
    });
    // FAQs are already emitted as FAQPage JSON-LD; show them in the page too so
    // the structured data describes visible content.
    const faqs = faqParts(c.faqs?.items);
    if (!title && !briefText && rendered.length === 0) return null;
    const img = c.mainImage ? ogImageFor(c.mainImage) : null;
    return (
      <article
        className="blog-ssr-body"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 5%" }}
      >
        {title ? <h1>{title}</h1> : null}
        {img ? (
          <img
            src={img}
            alt={title || "Adiance Blog"}
            width="1200"
            height="630"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        ) : null}
        {briefText ? (
          <p>
            <strong>{briefText}</strong>
          </p>
        ) : null}
        {rendered}
        {faqs.length ? (
          <section aria-label="Frequently asked questions">
            <h2>{clean(c.faqs?.title) || "Frequently Asked Questions"}</h2>
            {faqs.map((f, i) => (
              <div key={i}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </section>
        ) : null}
        {/* Crawlable links in the first response; the client swap replaces this
            fallback with the full page (header/footer included) after mount. */}
        <nav aria-label="More from Adiance">
          <p>
            <a href="/blog">Adiance blog</a> ·{" "}
            <a href="/oem-services">OEM services</a> ·{" "}
            <a href="/odm-services">ODM services</a> ·{" "}
            <a href="/white-label-cctv-camera-manufacturer">White-label CCTV cameras</a> ·{" "}
            <a href="/manufacturing">Manufacturing facility</a> ·{" "}
            <a href="/product-portfolio">Product portfolio</a> ·{" "}
            <a href="/case-study/white-label-edge-ai-camera-japan">Case study: white-label camera for Japan</a> ·{" "}
            <a href="/sample-request">Request a free sample</a> ·{" "}
            <a href="/contact">Contact Adiance</a>
          </p>
        </nav>
      </article>
    );
  } catch {
    return null;
  }
}

export default async function Page({ params }) {
  const slug = params?.urlTitle || "";
  const { state, blog } = await resolveBlog(slug);
  // Deleted / unpublished / invalid slug (incl. raw id-form URLs that don't
  // resolve) → real HTTP 404 via app/not-found.jsx, not a 200 empty shell.
  // A transient backend error falls through and renders the client shell.
  if (state === "notfound") notFound();

  const cmsTitle =
    clean(blog?.content?.metaTitle) ||
    clean(blog?.metadata?.metaTitle) ||
    clean(blog?.content?.title);
  const headline = cmsTitle || titleFromSlug(slug);
  const url = `${SITE}/blog/${slug}`;
  const ogImage = ogImageFor(blog?.content?.mainImage);
  const author = clean(blog?.content?.blogAuthor) || "Adiance Technologies";
  const datePublished = blog?.createdAt || undefined;
  const dateModified = blog?.updatedAt || blog?.createdAt || undefined;
  const tags = Array.isArray(blog?.content?.tags) ? blog.content.tags : [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: descriptionFor(blog),
    image: ogImage,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Adiance Technologies",
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/images/Logo.webp` },
    },
    datePublished,
    dateModified,
    ...(tags.length ? { keywords: tags.join(", ") } : {}),
    inLanguage: "en-US",
  };

  const faq = faqSchema(blog);

  return (
    <>
      <JsonLd data={articleSchema} />
      {faq ? <JsonLd data={faq} /> : null}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: headline, url: `/blog/${slug}` },
        ]}
      />
      <BlogSSRBody fallback={ssrArticleBody(blog)} />
    </>
  );
}
