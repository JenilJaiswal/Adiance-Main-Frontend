// CONTENT-001: the legacy `raw.sections` shape below assumes `heading` and
// `para` are plain strings. Some CMS payloads instead ship `heading` as a
// rich object (e.g. { text: "..." }) or `para`/points as an array of such
// objects. Left unguarded, that value gets embedded as-is into a Slate text
// leaf and is later stringified by the renderer, printing literal
// "[object Object]" (or a comma-joined run of them for an array) on the
// page instead of the real copy. Extract the real string wherever possible.
function extractText(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    return value
      .map((entry) => (entry && typeof entry === "object" ? entry.text ?? "" : entry ?? ""))
      .filter(Boolean)
      .join(" ");
  }
  if (typeof value === "object") return value.text ?? "";
  return "";
}

export function normalizeBlog(raw) {
  if (!raw || typeof raw !== "object") return raw;

  const metadata = raw.metadata || {};
  const content = raw.content || {};

  const legacy = {
    urlWords: raw.urlTitle,
    metaTitle: raw.metaTitle || raw.metaName,
    metaDescription: raw.metaDescription,
    title: raw.title,
    mainImage: raw.image,
    brief: raw.description,
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    faqs: Array.isArray(raw.faqs)
      ? {
          title: "FAQs",
          items: raw.faqs.map((f, i) => ({
            id: f?.id || `faq-${i}`,
            question: f?.question || "",
            answer: f?.answer || "",
          })),
        }
      : undefined,
    headingsAndImages: Array.isArray(raw.sections)
      ? raw.sections.flatMap((s, i) => {
          const arr = [];
          const headingText = extractText(s?.heading);
          const paraText = extractText(s?.para ?? s?.points);
          if (headingText) arr.push({ id: `h-${i}`, type: "h2", content: { text: [{ type: "text", text: headingText }] } });
          if (paraText) arr.push({ id: `p-${i}`, type: "p", content: { text: [{ type: "paragraph", children: [{ text: paraText }] }] } });
          return arr;
        })
      : [],
    schemas: [],
  };

  return {
    _id: raw._id,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    status: raw.status || "published",
    metadata: {
      urlWords: metadata.urlWords ?? legacy.urlWords ?? "",
      metaTitle: metadata.metaTitle ?? legacy.metaTitle ?? "",
      metaDescription: metadata.metaDescription ?? legacy.metaDescription ?? "",
    },
    content: {
      title: content.title ?? legacy.title ?? "Untitled",
      blogAuthor: content.blogAuthor ?? raw.blogAuthor ?? "Adiance",
      imageText: content.imageText ?? "",
      mainImage: content.mainImage ?? legacy.mainImage ?? "",
      imageVideos: Array.isArray(content.imageVideos) ? content.imageVideos : [],
      brief:
        content.brief ?? (legacy.brief ? [{ type: "paragraph", children: [{ text: legacy.brief }] }] : []),
      headingsAndImages: Array.isArray(content.headingsAndImages)
        ? content.headingsAndImages
        : legacy.headingsAndImages,
      tags: Array.isArray(content.tags) ? content.tags : legacy.tags,
      faqs: content.faqs ?? legacy.faqs,
      schemas: Array.isArray(content.schemas) ? content.schemas : legacy.schemas,
    },
  };
}



