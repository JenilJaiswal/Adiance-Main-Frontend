import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  let target = pathname;

  if (target !== "/" && target.endsWith("/")) {
    target = target.slice(0, -1);
  }

  const lower = target.toLowerCase();
  if (target !== lower) {
    target = lower;
  }

  if (target !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|N_Images|pdfs|assets|.*\\..*).*)"],
};
