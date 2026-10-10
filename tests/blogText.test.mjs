import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { nodeText, blockToParts, articleParts, faqParts } from "../src/seo/blogText.js";

// Shape reported by the CMS for /blog/oem-vs-odm-vs-white-label-camera-manufacturing:
// one "p" block whose content.text is an ARRAY of rich-text paragraph nodes with
// bold + plain runs. Text below is neutral test data, not article copy.
const paragraphNode = (label, body) => ({
  type: "paragraph",
  children: [{ text: label, bold: true }, { text: ` ${body}` }],
});
const richBlock = {
  id: "b1",
  type: "p",
  content: {
    text: [
      paragraphNode("Alpha.", "first test paragraph."),
      paragraphNode("Beta.", "second test paragraph."),
      paragraphNode("Gamma.", "third test paragraph."),
    ],
  },
};

test("rich-text paragraph arrays never serialise to [object Object]", () => {
  const parts = blockToParts(richBlock);
  assert.equal(parts.length, 3, "one <p> per paragraph node");
  const all = JSON.stringify(parts);
  assert.ok(!all.includes("[object Object]"));
  assert.equal(parts[0].text, "Alpha. first test paragraph.");
  assert.ok(parts.every((p) => p.tag === "p"));
});

test("plain string blocks and headings still work", () => {
  assert.deepEqual(blockToParts({ type: "h2", content: { text: "Heading" } }), [{ tag: "h2", text: "Heading" }]);
  assert.deepEqual(blockToParts({ type: "h3", content: { text: [{ type: "text", text: "Sub" }] } }), [{ tag: "h3", text: "Sub" }]);
  assert.deepEqual(blockToParts({ type: "p", content: { text: "Plain" } }), [{ tag: "p", text: "Plain" }]);
});

test("lists become list parts", () => {
  const parts = blockToParts({
    type: "p",
    content: { text: [{ type: "ul", children: [{ children: [{ text: "one" }] }, { children: [{ text: "two" }] }] }] },
  });
  assert.deepEqual(parts, [{ tag: "ul", items: ["one", "two"] }]);
});

test("unknown shapes are dropped, never stringified", () => {
  assert.equal(nodeText({ weird: true }), "");
  assert.deepEqual(blockToParts({ type: "p", content: { text: [{ weird: true }] } }), []);
  assert.deepEqual(blockToParts({ type: "p" }), []);
  assert.deepEqual(articleParts(undefined), []);
});

test("an article built from the broken shape keeps enough body text and headings", () => {
  const parts = articleParts([
    { type: "h2", content: { text: "Section" } },
    richBlock,
    { type: "h2", content: { text: "Another" } },
    { type: "p", content: { text: "Tail paragraph." } },
  ]);
  const text = parts.map((p) => p.text ?? p.items.join(" ")).join(" ");
  assert.ok(parts.filter((p) => p.tag === "h2").length >= 2, "has headings");
  assert.ok(text.length > 100, "has body text");
  assert.ok(!text.includes("[object Object]"));
});

test("faqParts keeps only real question/answer pairs with plain-text answers", () => {
  const faqs = faqParts([
    { question: "", answer: [{ type: "paragraph", children: [{ text: "" }] }] },
    { question: "Q1?", answer: [{ type: "paragraph", children: [{ text: "A1." }] }] },
  ]);
  assert.deepEqual(faqs, [{ question: "Q1?", answer: "A1." }]);
});

test("regression guard: the blog page must not stringify block text directly", () => {
  const src = readFileSync(new URL("../app/blog/[urlTitle]/page.jsx", import.meta.url), "utf8");
  assert.ok(!/String\(\s*b\??\.content\??\.text/.test(src), "String(b.content.text) reintroduces [object Object]");
  assert.ok(src.includes("articleParts("), "page must use the shared serialiser");
});
