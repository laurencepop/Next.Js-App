// import Logger from "@/utils/logger"
// import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, type NextRequest } from "next/server"


//? https://nextjs.org/docs/app/building-your-application/routing/middleware

interface YYY {
    message: string | undefined
}

// export async function POST(req: NextApiRequest, res: NextApiResponse<YYY>) {
// export async function POST(req: NextRequest, res: NextResponse<YYY>) {
export async function POST(req: NextRequest) {
    const body: YYY = await req.json()

    return NextResponse.json({ body })
    // return NextResponse.json({ message: done })
    // return new Response(JSON.stringify({ message: body }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
}
