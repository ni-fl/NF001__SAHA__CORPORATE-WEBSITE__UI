// IMPORTS
import { NextResponse } from 'next/server';

// GET NEXT-RESPONSE METHODS
const { json } = NextResponse;

// POST REQEST
const POST = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET BODY
		const { identifier, password } = await request.json();

		// SEND RESPONSE
		const res = await fetch(`${ process.env.NEXT_PUBLIC_CMS_URI }/api/auth/local`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				identifier: identifier,
				password: password,
			}),
		});
		const data = await res.json();

		// RETURN DATA
		return json(
			{ data: data },
			{ status: 200 },
		);

	// HANDLE ERRORS
	} catch (error) {

		// RETURN ERROR RESPONSE
		return json(
			{ message: error.message },
			{ status: 401 },
		);

	};

};

// EXPORTS
export {
	POST,
};
