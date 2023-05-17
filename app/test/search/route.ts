// import Logger from "@/utils/logger"
import sampleData from "@/home/items.json"
import { NextResponse, type NextRequest } from "next/server"

//~ Request Url to this route: ...3000/test/search?query=abc&other=xxx
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

	return NextResponse.json(filteredItem)
    // return NextResponse.json({ xxxx })
    // return new Response(JSON.stringify({ message: param }), { status: 200 })
    // res.status(200).json({ message: `Req method: ${req.method}` })
}
