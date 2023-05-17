import sampleData from "@/home/items.json"
// import Logger from "@/utils/logger"
import { NextResponse, type NextRequest } from "next/server"
import { v4 as uuidv4 } from "uuid"

//? https://nextjs.org/docs/app/building-your-application/routing/middleware

/* ---------------------------------- POST ---------------------------------- */

interface YYY {
    // message: string | undefined
}

export async function POST(req: NextRequest, res: NextResponse<YYY>) {
// export async function POST(req: NextRequest) {
    // const body: YYY = await req.json()
    const { name, description, path } = await req.json()

    const newItem = {
        id: uuidv4(),
        name,
        description,
        path,
    }
    // items.push(newItem) -> save to db

    return NextResponse.json({ newItem })
    // return NextResponse.json({ message: name, description, path })
    // return new Response(JSON.stringify({ message: body }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
}

/* --------------------------------- SEARCH --------------------------------- */

//~ Request Url to this route: ...3000/test/api?query=abc&other=xxx
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const param1 = searchParams.get("query") || ""
    console.log(`Res: ${param1}`) // abc
    const param2 = searchParams.get("other")
    console.log(`Res: ${param2}`) // xxx

    // do filtering based on the request params
    const filteredItem = sampleData.filter((item) => {
        return item.name.toLowerCase().includes(param1.toLowerCase())
    })

    // try {
    //     res.status(200).json({ name: "Mark" })
    // } catch (err) {
    //     res.status(400).json(await Logger({ err }))
    // }

    //! IMPORTANT: best approach -> return new Response(
    return NextResponse.json(filteredItem)
    // return NextResponse.json({ xxxx })
    // return new Response(JSON.stringify({ message: param }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
}
