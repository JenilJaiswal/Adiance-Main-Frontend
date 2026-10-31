"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The popup (form, axios, icons, image) lives in its own chunk and is only
// fetched after the page has finished loading, so it never competes with the
// page's own JS/images. Mounted once in app/layout.js — the root layout stays
// mounted across next/link navigations, so the popup shows on every full page
// load / refresh but not when the visitor moves between pages.
const EventMainDash = dynamic(() => import("./EventMainDash"), { ssr: false });

// Stop loading the popup once the event is over (end of 5 Dec 2026, IST).
const SHOW_UNTIL = new Date("2026-12-06T00:00:00+05:30").getTime();
// Don't hold the popup back longer than this if the load event is slow
const MAX_WAIT_MS = 3000;

export default function EventPopupLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (Date.now() >= SHOW_UNTIL) return;
    if (document.readyState === "complete") {
      setReady(true);
      return;
    }

    const show = () => setReady(true);
    window.addEventListener("load", show, { once: true });
    const timer = setTimeout(show, MAX_WAIT_MS);
    return () => {
      window.removeEventListener("load", show);
      clearTimeout(timer);
    };
  }, []);

  return ready ? <EventMainDash /> : null;
}
