import { test } from "node:test";
import assert from "node:assert/strict";
import { isServerOwned, keepClientOnly } from "../src/seo/helmetFilter.js";

const el = (type, props = {}, children) => ({ type, props: { ...props, children } });

test("server owns title, description, canonical, robots, Open Graph and Twitter tags", () => {
  assert.ok(isServerOwned("title"));
  assert.ok(isServerOwned("meta", { name: "description" }));
  assert.ok(isServerOwned("meta", { name: "Keywords" }));
  assert.ok(isServerOwned("meta", { name: "robots" }));
  assert.ok(isServerOwned("meta", { property: "og:title" }));
  assert.ok(isServerOwned("meta", { name: "twitter:card" }));
  assert.ok(isServerOwned("link", { rel: "canonical" }));
  assert.ok(isServerOwned("link", { rel: "alternate", hreflang: "en" }));
});

test("JSON-LD scripts and unrelated head tags are kept", () => {
  assert.ok(!isServerOwned("script", { type: "application/ld+json" }));
  assert.ok(!isServerOwned("meta", { name: "author" }));
  assert.ok(!isServerOwned("link", { rel: "preload" }));
  assert.ok(!isServerOwned("base"));
});

test("keepClientOnly drops owned tags, keeps JSON-LD, walks arrays and fragments, ignores false/null/text", () => {
  const isFragment = (c) => c.type === "FRAGMENT";
  const ld = el("script", { type: "application/ld+json" }, "{}");
  const kept = keepClientOnly(
    [
      el("title", {}, "x"),
      el("meta", { name: "description", content: "d" }),
      false,
      null,
      "stray text",
      [el("meta", { property: "og:image", content: "i" }), ld],
      el("FRAGMENT", {}, [el("link", { rel: "canonical", href: "/" }), el("meta", { name: "author", content: "a" })]),
    ],
    isFragment,
  );
  assert.equal(kept.length, 2);
  assert.equal(kept[0], ld);
  assert.equal(kept[1].props.name, "author");
});
