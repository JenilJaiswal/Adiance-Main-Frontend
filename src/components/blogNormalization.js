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
          if (s?.heading) arr.push({ id: `h-${i}`, type: "h2", content: { text: [{ type: "text", text: s.heading }] } });
          if (s?.para) arr.push({ id: `p-${i}`, type: "p", content: { text: [{ type: "paragraph", children: [{ text: s.para }] }] } });
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



