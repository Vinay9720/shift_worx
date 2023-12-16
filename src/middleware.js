import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    // eslint-disable-next-line prefer-arrow-callback
    function middleware(req) {
        if (
            req.nextUrl.pathname.startsWith('/admin') &&
            req.nextauth.token?.role !== 'Nurse' &&
            req.nextauth.token?.role !== 'admin' &&
            req.nextauth.token?.role !== 'super_admin'
        ) {
            return NextResponse.rewrite(new URL('/?message=You Are Not Authorized!', req.url));
        }
        if (
            req.nextUrl.pathname.startsWith('/employee') &&
            req.nextauth.token?.role !== 'Nurse' &&
            req.nextauth.token?.role !== 'admin' &&
            req.nextauth.token?.role !== 'super_admin'
        ) {
            return NextResponse.rewrite(new URL('/?message=You Are Not Authorized!', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ['/admin/:path*', '/employee/:path*'],
};
