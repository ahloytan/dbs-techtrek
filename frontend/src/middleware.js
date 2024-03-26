import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode"; 
import { isAdmin } from '@/utils/helper';

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const hasJWT = cookies().get("jwt");
  const { app_metadata: { role_id }} = jwtDecode(hasJWT?.value);

  if (!hasJWT || !isAdmin(role_id)) return NextResponse.redirect(new URL('/auth/login?type=error&redirectReason=unauthorized', req.url));
}
 
export const config = {
  matcher: [
    '/template',
    '/((?!_next/static|_next/image|favicon.ico|auth|assets|).*)'
  ]
}
