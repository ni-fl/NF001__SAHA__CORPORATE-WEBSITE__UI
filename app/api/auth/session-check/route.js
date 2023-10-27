// IMPORTS
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// GET NEXT-RESPONSE METHODS
const { json } = NextResponse;

// POST REQEST
const POST = async (request) => {

	// TRY-CATCH BLOCK
	try {

		// GET BODY
		const { token } = await request.json();

		// GET ENV VARIABLES
		const { JWT_SECRET: jwtSecret } = process.env;

		// VALIDATE TOKEN
		jwt.verify(token.value, jwtSecret);

		// RETURN DATA
		return json(
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
