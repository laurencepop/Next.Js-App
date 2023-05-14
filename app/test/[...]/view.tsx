"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { i_photo } from "../interfaces"

export default function View({ ...photo }: i_photo) {
    const router = useRouter()

    return (
        <div className="x c" key={photo.id}>
            <Image src={photo.url} alt={photo.title} width={500} height={500} />
            <br />
            <p>{photo.description}</p>
            <br />
            <input type="button" value="back" onMouseUp={() => router.back()} />
        </div>
    )
}
