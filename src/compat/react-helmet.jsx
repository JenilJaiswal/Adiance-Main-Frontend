"use client";

import React from "react";
// Import the real implementation by file path: `react-helmet` itself is
// aliased to this file in next.config.js, so importing the bare name would loop.
import RealHelmet from "react-helmet/lib/Helmet";
import { keepClientOnly } from "@/seo/helmetFilter";

const Impl = RealHelmet.Helmet || RealHelmet.default || RealHelmet;

/**
 * Drop-in replacement for react-helmet. Title, description, canonical, robots,
 * Open Graph and Twitter tags come from the server only (see helmetFilter.js);
 * JSON-LD and any other head tags still go through react-helmet unchanged.
 */
export function Helmet({ children, ...rest }) {
  const kept = keepClientOnly(children, (c) => c.type === React.Fragment);
  if (!kept.length && !Object.keys(rest).length) return null;
  return <Impl {...rest}>{kept}</Impl>;
}

export default Helmet;
