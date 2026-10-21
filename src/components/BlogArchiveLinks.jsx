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

export default async function BlogArchiveLinks() {
  const posts = await getAllPosts();
  if (posts.length === 0) return null;
  return (
    <nav
      aria-label="All Adiance articles"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px 48px" }}
    >
      <h2 style={{ fontSize: "1.4rem", marginBottom: 12 }}>All articles</h2>
      <ul style={{ margin: 0, paddingLeft: 20, columnWidth: 320, columnGap: 32 }}>
        {posts.map((p) => (
          <li key={p.slug} style={{ marginBottom: 6, breakInside: "avoid" }}>
            <a href={`/blog/${p.slug}`}>{p.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
