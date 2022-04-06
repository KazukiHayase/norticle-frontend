import { NextRequest, NextResponse } from 'next/server';

// See: https://github.com/vercel/examples/blob/main/edge-functions/basic-auth-password/pages/_middleware.ts
export function middleware(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_ENV !== 'staging') return NextResponse.next();

  const basicAuth = req.headers.get('authorization');
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    if (
      user === process.env.NEXT_PUBLIC_BASIC_USER &&
      pwd === process.env.NEXT_PUBLIC_BASIC_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
