/**
 * Pure helpers that turn the CMS rich-text shapes into plain text, so the
 * server-rendered blog body never stringifies an object.
 *
 * Why this exists: the SSR fallback in app/blog/[urlTitle]/page.jsx used to do
 * `String(block.content.text)`. For posts where `content.text` is an array of
 * rich-text nodes ([{ type: "paragraph", children: [{ text, bold }] }]) that
 * printed the literal "[object Object]" once per node (seven times on
 * /blog/oem-vs-odm-vs-white-label-camera-manufacturing).
 *
 * Nothing in here invents content: it only walks what the CMS sent and returns
 * "" for anything it does not recognise. It never calls String() on an object.
 */

const LIST_TYPES = new Set([
  "ul",
  "ol",
  "bulleted-list",
  "numbered-list",
  "unordered-list",
  "ordered-list",
  "list",
]);

/** Plain text of any rich-text value: string | node | array of nodes. */
export function nodeText(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) {
    return value
      .map(nodeText)
      .filter((part) => part !== "")
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  }
  if (typeof value === "object") {
    if (typeof value.text === "string") return value.text;
    if (Array.isArray(value.text)) return nodeText(value.text);
    if (Array.isArray(value.children)) {
      // Text runs inside one paragraph are contiguous: join without a space.
      return value.children
        .map(nodeText)
        .join("")
        .replace(/\s+/g, " ")
        .trim();
    }
  }
  return "";
}

/**
 * Convert one CMS block ({ type, content: { text } }) into renderable parts:
 *   { tag: "h2" | "h3" | "p", text }  or  { tag: "ul" | "ol", items: string[] }
 * A "p" block whose text is an array of paragraph nodes yields one part per
 * node, so paragraph breaks survive.
 */
export function blockToParts(block) {
  const type = String(block?.type || "p").toLowerCase();
  const raw = block?.content?.text;

  if (type === "h1" || type === "h2") {
    const text = nodeText(raw).trim();
    return text ? [{ tag: "h2", text }] : [];
  }
  if (type === "h3" || type === "h4") {
    const text = nodeText(raw).trim();
    return text ? [{ tag: "h3", text }] : [];
  }

  const nodes = Array.isArray(raw) ? raw : raw ? [raw] : [];
  const parts = [];
  for (const node of nodes) {
    const nodeType = String(node?.type || "").toLowerCase();
    if (LIST_TYPES.has(nodeType) && Array.isArray(node?.children)) {
      const items = node.children.map(nodeText).filter(Boolean);
      if (items.length) {
        parts.push({
          tag: nodeType.startsWith("ol") || nodeType.startsWith("numbered") || nodeType === "ordered-list" ? "ol" : "ul",
          items,
        });
      }
      continue;
    }
    const text = nodeText(node).trim();
    if (text) parts.push({ tag: "p", text });
  }
  return parts;
}

/** All parts for an article body, in order. */
export function articleParts(blocks) {
  if (!Array.isArray(blocks)) return [];
  return blocks.flatMap(blockToParts);
}

/** FAQ items with a real question and a plain-text answer. */
export function faqParts(items) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => ({
      question: nodeText(item?.question).trim(),
      answer: nodeText(item?.answer).trim(),
    }))
    .filter((entry) => entry.question && entry.answer);
}
