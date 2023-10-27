// IMPORTS
import { NextResponse } from 'next/server';

// GET RESPONSE METHODS
const { next, redirect } = NextResponse;

// DEFINE PATH CATEGORIES
const authPaths = ['/login'];

// MIDDLEWARE
export const middleware = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET REQUESTED PATHNAME
		const { pathname } = request.nextUrl;

		// GET ENV VARIABLES
		const { APP_ENVIRONMENT: environment } = process.env;

		// LET PASS ALWAYS FOR AUTH PATHS
		if (authPaths.includes(pathname)) {
			return next();
		};

		// LET PASS ALWAYS IN PRODUCTION
		if (environment === 'production') {
			return next();
		};

		// GET TOKEN OF COOKIE
		const token = (request.cookies).get('session-token');

		// CHECK IF COOKIE IS AVAILABLE
		if (!token) throw new Error('no session-token available');

		// SEND RESPONSE
		const response = await fetch(`${ process.env.NEXT_PUBLIC_UI_URI }/api/auth/session-check`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				token: token,
			}),
		});
		const { status } = await response.json();

		// // IF TOKEN IS VALID LET USER PASS
		if (status === 200) {
			return next();
		};

	// HANDLE ERRORS
	} catch (error) {

		// RETURN TO LOGIN PAGE
		return redirect(new URL('/login', request.url));

	};

};

// CONFIG
export const config = {

	// MATCHER
	matcher: [
		'/',
		'/project/:path*',
		'/showcase/:path*',
		'/contact',
		'/imprint',
		'/data-privacy',
	],

};
