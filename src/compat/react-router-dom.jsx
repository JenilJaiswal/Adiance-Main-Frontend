"use client";

import NextLink from "next/link";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams as useNextParams,
} from "next/navigation";
import { forwardRef, useMemo } from "react";

export const Link = forwardRef(function Link(
  { to, href, replace, state, relative, preventScrollReset, ...rest },
  ref,
) {
  void replace;
  void state;
  void relative;
  void preventScrollReset;
  return <NextLink ref={ref} href={to ?? href ?? "#"} {...rest} />;
});

export const NavLink = forwardRef(function NavLink(
  { to, className, style, children, end, caseSensitive, ...rest },
  ref,
) {
  const pathname = usePathname() || "/";
  const target = String(to ?? "");
  const a = caseSensitive ? pathname : pathname.toLowerCase();
  const b = caseSensitive ? target : target.toLowerCase();
  const isActive = end ? a === b : a === b || a.startsWith(b + "/");

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;
  const resolvedStyle =
    typeof style === "function" ? style({ isActive }) : style;
  const resolvedChildren =
    typeof children === "function" ? children({ isActive }) : children;

  return (
    <NextLink
      ref={ref}
      href={target || "#"}
      className={resolvedClassName}
      style={resolvedStyle}
      {...rest}
    >
      {resolvedChildren}
    </NextLink>
  );
});

const NAV_STATE_KEY = "__nav_state__";

function stripUrl(url) {
  return String(url).split("?")[0].split("#")[0];
}

function writeNavState(url, state) {
  if (typeof window === "undefined") return;
  try {
    if (state === undefined || state === null) {
      sessionStorage.removeItem(NAV_STATE_KEY);
    } else {
      sessionStorage.setItem(
        NAV_STATE_KEY,
        JSON.stringify({ pathname: stripUrl(url), state }),
      );
    }
  } catch {}
}

function readNavState(pathname) {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(NAV_STATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.pathname === pathname) return parsed.state ?? null;
  } catch {}
  return null;
}

export function useNavigate() {
  const router = useRouter();
  return useMemo(() => {
    const navigate = (to, options) => {
      if (typeof to === "number") {
        if (to < 0) router.back();
        else router.forward();
        return;
      }
      const url = typeof to === "string" ? to : to?.pathname ?? "/";
      writeNavState(url, options?.state);
      if (options && options.replace) router.replace(url);
      else router.push(url);
    };
    return navigate;
  }, [router]);
}

export function useLocation() {
  const pathname = usePathname() || "/";
  return {
    pathname,
    search: typeof window !== "undefined" ? window.location.search : "",
    hash: typeof window !== "undefined" ? window.location.hash : "",
    state: readNavState(pathname),
    key: pathname,
  };
}

export function useParams() {
  return useNextParams() || {};
}

export function useSearchParamsCompat() {
  const sp = useSearchParams();
  return [sp, () => {}];
}
export { useSearchParamsCompat as useSearchParams };

export function Navigate({ to, replace }) {
  const navigate = useNavigate();
  if (typeof window !== "undefined") {
    queueMicrotask(() => navigate(to, { replace }));
  }
  return null;
}

export function Outlet() {
  return null;
}

export const BrowserRouter = ({ children }) => children;
export const Router = ({ children }) => children;
export const Routes = ({ children }) => children;
export const Route = () => null;
export const MemoryRouter = ({ children }) => children;
export const HashRouter = ({ children }) => children;

export default {
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
  Outlet,
  BrowserRouter,
  Router,
  Routes,
  Route,
};
