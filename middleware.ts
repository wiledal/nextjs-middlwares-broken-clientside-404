import { NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest) => {
	const response = NextResponse.next();
	return response;
};

export default middleware;
