import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const hasJWT = cookies().get("jwt");
  if (!hasJWT) return NextResponse.redirect(new URL('/auth/login', req.url));
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|assets|).*)']
}
