// npm i limiter

import { RateLimiter } from "limiter"
//~ use limiter in all routes, or create separate for each route
export const limiter = new RateLimiter({
	tokensPerInterval: 3,
	interval; "min",
	fireImmediately: true,
})

//~ than on route.ts
// import { limiter } from 'ultils/limiter'
export async function GET(request: Request){
	const origin = request.headers.get("origin")

	const remaining = await limiter.removeTokens(1)
	console.log(`Remaining: ${remaining}`)

	if (remaining< 0){
		return new NextResponse(null, {
			status:429,
			statusText: "Too many requests",
			headers: {
				'Access-Control-Allow-Origin': origin || '*',
				// '*' if request send from thunderclient or postman w no origin
				'Content-Type':'text/plain',
			}
		})
	}

	return new Response('xxxxxxxxxxxx')
}
