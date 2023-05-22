import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
	const res = new NextResponse() // or test:
	const res = NextResponse.next({
		request: {
			headers: new Headers(req.headers),
		}
	})
	res.headers.forEach((header) => console.log(`header: ${header}`))
	// then after reading all headers keys
	res.headers.set("x-custom-auth-header", "isAuthed")
	//~ than last below just: return res

	//~ Set a cookie
	res.cookies.set('cName', 'cValue') // or set a cookie with options:
	res.cookies.set('cName', 'cValue', { path: '/test' })
	// secure: process.env.NODE_ENV !== "development" // true | false

	//~ Read a cookie
	const ck = req.cookies['cName']
	const ck = req.cookies.get("cName")?.valueOf()
	const ck = req.cookies.has("cName") // boolean

	//~ Get all cookie details
	const allCookies = req.cookies // or:
	const { value, options } = res.cookies.getWithOptions('cName')

	//~ Delete a cookie
	res.cookies.delete('cName')

	//~ Delete all cookies
	res.cookies.clear()

	//& go to netxt
	return NextResponse.rewrite(req.nextUrl) // rewrite or redirect, or
	return NextResponse.next()

}
