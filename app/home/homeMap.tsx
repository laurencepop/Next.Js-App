"use client"

import Link from "next/link"
import { memo } from "react"
import { i_Home } from "./interfaces"
import useHomeSeach from "./useHomeSearch"

const HomeMap = () => {
    const { entries } = useHomeSeach()

    return (
        <>
            {entries.map((item: i_Home) => (
                <Link href={`/${item.path}`} key={item.name}>
                    <div className="homeItem">
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default memo(HomeMap)
