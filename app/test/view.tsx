"use client"

import Link from "next/link"
import { i_photo } from "./interfaces"

export default function View({ ...item }: i_photo) {
    return (
        <div
            className="border-2 p-4 hover:bg-sky-700 cursor-pointer"
            key={item.id}
        >
            <Link
                rel="preload"
                href={`/test/${item.id}/${item.title}`}
                target="_self"
            >
                <p className="g">{item.title}</p>
            </Link>
        </div>
    )
}
