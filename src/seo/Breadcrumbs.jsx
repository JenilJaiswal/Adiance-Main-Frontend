/**
 * Visible breadcrumb navigation — server component, no client JS needed.
 *
 * Checklist row 59 (2026-09-10): the site already emits a BreadcrumbList
 * JSON-LD block on every page via <PageSchema>, but had no matching visible
 * breadcrumb UI — schema without a visible trail helps rich results but does
 * nothing for users or for internal-linking crawl signals. This component
 * renders the same trail `buildBreadcrumbs()` produces for the schema, so
 * the two can never say something different.
 *
 * Usage: rendered automatically by <PageSchema> (see PageSchema.jsx) — no
 * per-page wiring needed. Pass hideBreadcrumbs to <PageSchema> to opt out
 * (e.g. on the homepage, where a "Home" breadcrumb is redundant).
 */

import { buildBreadcrumbs } from "./breadcrumbUtils";
import "./Breadcrumbs.css";

export function Breadcrumbs({ path }) {
  if (!path || path === "/") return null;
  const items = buildBreadcrumbs(path);
  if (items.length < 2) return null;

  return (
    <nav className="adiance-breadcrumbs" aria-label="Breadcrumb">
      <ol className="adiance-breadcrumbs__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.url} className="adiance-breadcrumbs__item">
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <>
                  <a href={item.url}>{item.name}</a>
                  <span className="adiance-breadcrumbs__sep" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
