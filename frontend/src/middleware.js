import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export function middleware(req, res) {
  const hasJWTToken = cookies().get("jwtToken");
  if (!hasJWTToken) return NextResponse.redirect(new URL('/auth/login', req.url));
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/template', '/customers', '/companies', '/account', '/settings'],
}
