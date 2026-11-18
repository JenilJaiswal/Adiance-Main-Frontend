// Server component: a plain, crawlable list of every published article on /blog.
//
// The blog cards above it are loaded in the browser (client fetch), so the
// first HTML of /blog contained no links to individual articles and most posts
// had zero inbound links for crawlers that do not run JavaScript. This list is
// rendered on the server from the same CMS API. If the API cannot be reached,
// it renders nothing (the page still works exactly as before).
const BACKEND =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend.adiance.com";

const PAGE_SIZE = 50;
const MAX_PAGES = 20;

async function fetchPage(page) {
  const url = `${BACKEND}/api/blogs?page=${page}&limit=${PAGE_SIZE}&sort=latest&status=published`;
  const res = await fetch(url, {
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`blogs list ${res.status}`);
  return res.json();
}

async function getAllPosts() {
  const posts = [];
  const seen = new Set();
  try {
    for (let page = 1; page <= MAX_PAGES; page += 1) {
      const body = await fetchPage(page);
      const list = body && body.status === "success" && Array.isArray(body.data) ? body.data : [];
      for (const b of list) {
        const slug = b?.metadata?.urlWords;
        const title = typeof b?.content?.title === "string" ? b.content.title.trim() : "";
        if (!slug || !title || seen.has(slug)) continue;
        seen.add(slug);
        posts.push({ slug, title });
      }
      const totalPages = Number(body?.pagination?.total) || 1;
      if (list.length === 0 || page >= totalPages) break;
    }
  } catch (e) {
    // Fall back to whatever was collected (possibly nothing).
  }
  return posts;
}

// Articles built as their own Next.js pages (app/blog/<slug>/page.jsx) are not
// in the CMS, so they never appeared in this list and had zero inbound links
// (ADI-012 link scan, 16 Nov 2026). They are listed here as well.
const STATIC_POSTS = [
  { href: "/blog/bis-er-01-certified-cctv-camera-companies-india", title: "BIS ER-01 Certified CCTV Camera Companies in India (2026)" },
  { href: "/blog/china-plus-one-strategy-cctv-manufacturing", title: "China+1 Strategy: Diversifying CCTV Manufacturing" },
  { href: "/blog/comparing-qualcomm-ambarella-novatek-for-cctv", title: "Comparing Qualcomm, Ambarella and Novatek for CCTV Manufacturing" },
  { href: "/blog/geopolitics-of-guts-why-non-chinese-soc-is-new-baseline", title: "Why Non-Chinese SoC Is the New Baseline for Security Brands" },
  { href: "/blog/how-to-choose-oem-cctv-manufacturer", title: "How to Choose an OEM CCTV Manufacturer" },
  { href: "/blog/how-to-choose-oem-cctv-manufacturer-checklist", title: "How to Choose an OEM CCTV Camera Manufacturer: The Complete Checklist" },
  { href: "/blog/how-to-migrate-cctv-brand-from-chinese-soc", title: "How to Migrate Your CCTV Brand from Chinese to Non-Chinese SoC" },
  { href: "/blog/ndaa-compliant-cctv-cameras-buyers-guide", title: "NDAA Compliant Cameras: Buyer's Guide 2026" },
  { href: "/blog/the-complete-guide-to-ndaa-compliant-surveillance-cameras", title: "The Complete Guide to NDAA Compliant Surveillance Cameras" },
  { href: "/blog/oem-cctv-camera-moq-explained", title: "OEM CCTV Camera MOQ Explained" },
  { href: "/blog/supply-chain-diversification-2026", title: "Supply Chain Diversification in Surveillance 2026" },
  { href: "/blog/supply-chain-diversification-cctv-manufacturing", title: "Supply Chain Diversification in CCTV Manufacturing" },
  { href: "/blog/white-label-vs-branded-cctv-cameras", title: "White Label vs Branded CCTV Cameras" },
  { href: "/blog/white-label-vs-private-label-cctv-cameras", title: "White Label vs Private Label CCTV: What's the Difference?" },
  { href: "/blog/why-surveillance-needs-built-in-vms-cloud", title: "Why Your Surveillance System Needs a Built-in VMS and Cloud" },
  { href: "/qualcomm-soc-future-edge-ai-surveillance-cameras", title: "Qualcomm SoC: The Future of Edge AI Surveillance Cameras" },
];

export default async function BlogArchiveLinks() {
  const cms = await getAllPosts();
  const seen = new Set(cms.map((p) => `/blog/${p.slug}`));
  const posts = [
    ...cms.map((p) => ({ href: `/blog/${p.slug}`, title: p.title })),
    ...STATIC_POSTS.filter((p) => !seen.has(p.href)),
  ];
  if (posts.length === 0) return null;
  return (
    <nav
      aria-label="All Adiance articles"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px 48px" }}
    >
      <h2 style={{ fontSize: "1.4rem", marginBottom: 12 }}>All articles</h2>
      <ul style={{ margin: 0, paddingLeft: 20, columnWidth: 320, columnGap: 32 }}>
        {posts.map((p) => (
          <li key={p.href} style={{ marginBottom: 6, breakInside: "avoid" }}>
            <a href={p.href}>{p.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
