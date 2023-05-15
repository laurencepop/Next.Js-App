"use client"

import useObject from "@/app/hooks/useObject"
import { i_photo } from "@/test/interfaces"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function View({ ...photo }: i_photo) {
    const router = useRouter()
    const isObject = useObject<i_photo>(photo)

    return isObject ? (
        <div className="x c" key={photo.id}>
            <b className="y c">{photo.title}</b>
            <Image src={photo.url} alt={photo.title} width={500} height={500} />
            <br />
            <p>{photo.description}</p>
            <p className="g text-right">User {photo.user}</p>
            <br />
            <input type="button" value="back" onMouseUp={() => router.back()} />
        </div>
    ) : (
        <b className="c">no data</b>
    )
}
