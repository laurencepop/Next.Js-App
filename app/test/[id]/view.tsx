"use client"

import Image from "next/image"
import Link from "next/link"
import { i_photo } from "../interfaces"

export default function View({ ...photo }: i_photo) {
    return (
        <div className="x c" key={photo.id}>
            <Image src={photo.url} alt={photo.title} width={500} height={500} />
            <br />
            <p>{photo.description}</p>
            <br />
            <Link rel="preload" href={`/test`} target="_self">
                <button>back</button>
            </Link>
        </div>
    )
}
