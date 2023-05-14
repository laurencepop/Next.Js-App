"use client"

import { i_photo } from "@/test/interfaces"
import Link from "next/link"

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
                <p className="g">Title: {item.title}</p>
                <p>User: {item.user}</p>
            </Link>
        </div>
    )
}
