import { NextRequest, NextResponse } from "next/server"

//! check official documentation: Middleware & Edge Functions!

export function middleware(req: NextRequest, res: NextResponse) {
	// 1.
	const regex = new RegExp('/api/*')
	if (regex.test(req.url)) {}
	// 2.
	if (req.url.includes('/app/test/api/')){}

	// const origin = req.headers.get('origin')
	console.log(`XXX: Middleware!`)
	console.log(`XXX: ${req.method}`)
	console.log(`XXX: ${req.url}`)
	console.log(`XXX: ${req.nextUrl}`) //* check what it outputs!
	console.log(`XXX: ${req.nextUrl.pathname}`)
	if (req.nextUrl.pathname.startsWith("/login")) { }

	const basicAuth = req.headers.get("authorization")
	if (basicAuth) {
		const auth = basicAuth.split('')[1
		const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

		if (user === 'admin' && pwd === 'password'){
			return NextResponse.next()
		}
	}
	return new NextResponse('Auth required',{
		status:401,
		headers: {
			'www-Authenticate': 'Basic realm="Secure Area"',
		}
	})

	// return NextResponse.next()
	// return NextResponse.rewrite(req.nextUrl)

	if (isAuthValid(request)){
		return NextResponse.next()
	}
	// else if not valid:
	const loginUrl = new URL('/login',request.url)
	loginUrl.searchParams.set('from',request.nextUrl.pathname)
	return NextResponse.redirect(loginUrl)

	// redir
	// return NextResponse.rewrite(new URL('/contact'.req.nextUrl))
	// return NextResponse.redirect(req.nextUrl)

}

