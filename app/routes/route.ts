import type { NextApiRequest, NextApiResponse } from "next"
import Logger from "../utils/logger"

type Data = {
    name: string
}
export async function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
    try {
        res.status(200).json({ name: "Mark" })
    } catch (err) {
        res.status(400).json(await Logger({ err }))
    }
}
