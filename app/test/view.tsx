"use client"

import { i_data, i_photo } from "@/test/interfaces"
import Link from "next/link"
import useObject from "../hooks/useObject"

export default function View({ ...data }: i_data) {
    const isObject = useObject<i_photo[]>(data.photos)

    return isObject ? (
        <div className="grid gap-16 grid-cols-fluid">
            {data.photos.map((item: i_photo) => (
                <Link
                    key={item.id}
                    rel="preload"
                    href={`/test/${item.id}/${item.title}`}
                    target="_self"
                >
                    <div className="o cp h-80 p-4 hover:bg-sky-800">
                        <p className="g">Title: {item.title}</p>
                        <p>User: {item.user}</p>
                    </div>
                </Link>
            ))}
        </div>
    ) : (
        <b className="c">no data</b>
    )
}
