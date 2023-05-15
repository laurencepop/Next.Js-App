"use client"

import { i_data, i_photo } from "@/test/interfaces"
import Link from "next/link"
import useObject from "../hooks/useObject"

export default function View({ ...data }: i_data) {
    const isObject = useObject<i_photo[]>(data.photos)

    return isObject ? (
        <div className="grid gap-16 grid-cols-fluid">
            {data.photos.map((item: i_photo) => (
                <div
                    key={item.id}
                    className="border-4 p-8 hover:bg-sky-800 cursor-pointer"
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
            ))}
        </div>
    ) : (
        <b className="c">no data</b>
    )
}
