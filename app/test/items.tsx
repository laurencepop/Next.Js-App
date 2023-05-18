"use client"

import { i_items, i_photo } from "@/test/interfaces"
import checkObject from "@/utils/checkObject"
import Link from "next/link"

export default function Items({ ...items }: i_items) {
    const isObject = checkObject<i_photo[]>(items.photos)

    return isObject ? (
        <div className="grid gap-16 grid-cols-fluid">
            {items.photos.map((item: i_photo) => (
                <Link
                    key={item.id}
                    rel="preload"
                    href={`/test/${item.id}/${item.title}`}
                    target="_self"
                >
                    <div className="outline cp h-80 p-4 hover:bg-sky-800">
                        <p className="g">Title: {item.title}</p>
                        <p>User: {item.user}</p>
                    </div>
                </Link>
            ))}
        </div>
    ) : (
        <b className="c">no items</b>
    )
}
