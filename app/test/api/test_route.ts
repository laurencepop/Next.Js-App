import sampleData from "@/home/data.json"
// import Logger from "@/utils/logger"
import { NextResponse, type NextRequest } from "next/server"
// NextApiRequest, NextApiResponse

// interface YYY {
//     // message: string | undefined
// }

// export async function POST(req: NextRequest, res: NextResponse<YYY>) {
export async function POST(req: NextRequest) {
    // const body: YYY = await req.json()
    // const { name, description, path } = await req.json()
    // req.cookies req.body req.query

    // const newItem = {
    //     // id: uuidv4(),//FIXME here generate w something else than uuid?
    //     name,
    //     description,
    //     path,
    // }
    // items.push(newItem) -> save to db

    // return NextResponse.json({ newItem })
    // return new NextResponse.json({ message: name, description, path })
    // return new NextResponse(JSON.stringify({ message: body }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
    return new NextResponse(
        null, // or: { message: param },
        {
            status: 200,
            statusText: "xxx",
            headers: {
                "Access-Control-Origin": origin || "*",
                "Content-Type": "text/plain",
            },
        }
    )
}

//~ Request Url to this route: ...3000/test?query=abc&other=xxx
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

    //~ maybe use "try & catch" with "NextRequest & NextResponse"
    // try {
    //     return res.status(200).json({ name: "Mark" })
    // } catch (err) {
    //     return res.status(400).json(await Logger({ err }))
    // }

    //! IMPORTANT: best approach -> return new NextResponse.json()
    return NextResponse.json(filteredItem)
    // return new NextResponse(JSON.stringify({ message: param }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
}

/* --------------------------------- DELETE --------------------------------- */

export async function DELETE(req: NextRequest) {
    const { id }: Partial<Todo> = await req.json()

    if (!id) return NextResponse.json({ message: "Todo id required" })

    const API_KEY = process.env.DATA_API_KEY as string
    await fetch(`${DATA_SOURCE_URL}/${ID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Api-Key": API_KEY,
        },
    })

    return NextResponse.json({ message: `Todo ${id} deleted` })
}
