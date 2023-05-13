"use client"

import Link from "next/link"
import { i_photo } from "./interfaces"

export default function View({ ...item }: i_photo) {
    console.log(`PUBLIC KEY: ${process.env.NEXT_PUBLIC_KEY_NAME}`)

    return (
        <div
            className="border-2 p-4 hover:bg-sky-700 cursor-pointer"
            key={item.id}
        >
            <Link href={`/test/${item.id}`} target="_self">
                <p className="g">{item.title}</p>
            </Link>
        </div>
    )
}