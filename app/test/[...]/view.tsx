"use client"

import { i_photo } from "@/test/interfaces"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function View({ ...photo }: i_photo) {
    const router = useRouter()

    return (
        <div className="x c" key={photo.id}>
            <b className="y c">{photo.title}</b>
            <Image src={photo.url} alt={photo.title} width={500} height={500} />
            <br />
            <p>{photo.description}</p>
            <p className="g">User {photo.user}</p>
            <br />
            <input type="button" value="back" onMouseUp={() => router.back()} />
        </div>
    )
}
