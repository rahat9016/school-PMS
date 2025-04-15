import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath: boolean =
    path === "/signing" || path === "/auth/register";

  //----------------COOKIE VALUES--------------------
  const token = request.cookies.get("accessToken")?.value;

  if (path.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/signing", request.nextUrl));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }
}

export const config = {
  matcher: ["/signing", "/dashboard", "/dashboard/:path*"],
};
