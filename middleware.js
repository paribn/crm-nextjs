import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request.url);

  return request.url.includes("auth") || request.url.includes("dashboard")
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sitemap.xml).*)",
  ],
};
