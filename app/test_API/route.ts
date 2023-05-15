import type { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from "next/server"
import Logger from "../utils/logger"

//? https://nextjs.org/docs/app/building-your-application/routing/middleware

/* -------------------------------------------------------------------------- */

type XXX = {
    name: string
}

export async function handler(req: NextApiRequest, res: NextApiResponse<XXX>) {
    try {
        if (req.method === "GET") {
            //...do stuff here
            res.status(200).json({ name: "Mark" })
        }
        if (req.method === "POST") {
            //...do stuff here
            res.status(200).json({ name: "Mark" })
        }
    } catch (err) {
        res.status(400).json(await Logger({ err }))
    }
}

/* ----------------------------------- OR ----------------------------------- */

//~ gets directly hit, when pinging the route.ts file, depending or req type:

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const param = searchParams.get("key") // api_name/folder?key=value

    return new Response(
        JSON.stringify({ message: param }),
        { status: 200 }
    )
}

export async function POST(req: NextRequest) {
    const body = await req.json()

    return new Response(
        JSON.stringify({ message: body }),
        { status: 200 }
    )
}

// or try to see if works, using NextApiRequest & NextApiResponse:

// interface YYY {
//     message: string | undefined
// }

// export async function POST(req: NextApiRequest, res: NextApiResponse<YYY>) {
//     console.log(`Req method: ${req.method}`)
//     res.status(200).json({ message: `Req method: ${req.method}` })
// }
