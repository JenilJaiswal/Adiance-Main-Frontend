/**
 * Decides which <Helmet> children may still reach the document head.
 *
 * The server already emits title, description, canonical, robots, Open Graph
 * and Twitter tags for every route (src/seo/pageMetadata.js + generateMetadata).
 * About 70 page components also wrap the same tags in react-helmet, which, once
 * the page hydrates, replaced or duplicated them with a different version. That
 * gave crawlers one title and visitors another, and left two description tags.
 *
 * Rule: the server owns the tags below. Everything else (JSON-LD <script>
 * blocks, other <meta>/<link> tags, <base>, etc.) is passed through untouched,
 * so structured data and any extra tags behave exactly as before.
 */

const SERVER_OWNED_META_NAMES = new Set([
  "description",
  "keywords",
  "robots",
  "googlebot",
  "title",
]);

const lower = (value) => String(value ?? "").toLowerCase();

/** True when the server-rendered head already provides this tag. */
export function isServerOwned(type, props = {}) {
  if (type === "title") return true;
  if (type === "meta") {
    const name = lower(props.name);
    const property = lower(props.property);
    if (SERVER_OWNED_META_NAMES.has(name)) return true;
    if (name.startsWith("twitter:")) return true;
    if (property.startsWith("og:")) return true;
    return false;
  }
  if (type === "link") {
    const rel = lower(props.rel);
    return rel === "canonical" || rel === "alternate";
  }
  return false;
}

/** Keep only the children the server does not already own. */
export function keepClientOnly(children, isFragment = () => false) {
  const out = [];
  const visit = (child) => {
    if (child === null || child === undefined || typeof child === "boolean") return;
    if (Array.isArray(child)) {
      child.forEach(visit);
      return;
    }
    if (typeof child !== "object") return; // stray text never belongs in <head>
    if (isFragment(child)) {
      visit(child.props?.children);
      return;
    }
    if (typeof child.type === "string" && isServerOwned(child.type, child.props)) return;
    out.push(child);
  };
  visit(children);
  return out;
}
