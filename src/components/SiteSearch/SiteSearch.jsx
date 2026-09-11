"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import searchIndex from "@/data/searchIndex.json";
import "./SiteSearch.css";

const MAX_RESULTS = 8;

// Plain-JS relevance scoring — no fuzzy-search dependency, since a new
// package can't be installed on this build until the next `npm install`.
// Tokenizes the query and rewards: an exact/near match on the page label,
// any token appearing in the label/title (highest), then description, then
// keywords (lowest). Good enough for a site this size (145 entries).
function scoreEntry(entry, tokens) {
  const label = entry.label.toLowerCase();
  const title = entry.title.toLowerCase();
  const description = entry.description.toLowerCase();
  const keywords = entry.keywords.toLowerCase();

  let score = 0;
  for (const token of tokens) {
    if (!token) continue;
    if (label.startsWith(token)) score += 6;
    else if (label.includes(token)) score += 4;
    if (title.includes(token)) score += 2;
    if (description.includes(token)) score += 1.5;
    if (keywords.includes(token)) score += 1;
  }
  return score;
}

function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const scored = searchIndex
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((r) => r.entry);
  return scored;
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    if (open) {
      // Focus after the overlay has actually mounted/animated in.
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
    setQuery("");
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
      // Quick-open shortcut, standard on most sites with on-site search.
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goTo = (path) => {
    setOpen(false);
    router.push(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      goTo(results[0].path);
    } else if (query.trim()) {
      goTo(`/blog?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <button
        type="button"
        className="site-search-trigger"
        onClick={() => setOpen(true)}
        aria-label="Search the site"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="site-search-overlay" onClick={() => setOpen(false)}>
          <div className="site-search-panel" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit} className="site-search-form">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="site-search-form-icon">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, solutions, pages…"
                className="site-search-input"
                aria-label="Search"
              />
              <button
                type="button"
                className="site-search-close"
                onClick={() => setOpen(false)}
                aria-label="Close search"
              >
                ×
              </button>
            </form>

            <div className="site-search-results">
              {query.trim() === "" && (
                <p className="site-search-hint">
                  Start typing to search across products, solutions, industries and pages.
                </p>
              )}

              {query.trim() !== "" && results.length === 0 && (
                <p className="site-search-hint">
                  No page matches "{query.trim()}".{" "}
                  <button
                    type="button"
                    className="site-search-bloglink"
                    onClick={() => goTo(`/blog?q=${encodeURIComponent(query.trim())}`)}
                  >
                    Search the blog instead →
                  </button>
                </p>
              )}

              {results.map((r) => (
                <button
                  key={r.path}
                  type="button"
                  className="site-search-result"
                  onClick={() => goTo(r.path)}
                >
                  <span className="site-search-result-label">{r.label}</span>
                  <span className="site-search-result-desc">{r.description}</span>
                </button>
              ))}

              {query.trim() !== "" && results.length > 0 && (
                <button
                  type="button"
                  className="site-search-result site-search-bloglink-row"
                  onClick={() => goTo(`/blog?q=${encodeURIComponent(query.trim())}`)}
                >
                  <span className="site-search-result-label">
                    Search the blog for "{query.trim()}" →
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
