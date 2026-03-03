import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath: boolean =
    path === "/login" || path === "/auth/register";

  //----------------COOKIE VALUES--------------------
  const token = request.cookies.get("accessToken")?.value;

  if (path.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*"],
};
