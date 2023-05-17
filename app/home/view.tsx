"use client"

import { i_Home } from "@/home/interfaces"
import styles from "@/home/styles.module.css"
import useHomeSeach from "@/home/useHomeSearch"
import Link from "next/link"
import { memo } from "react"

const HomeMap = () => {
    const { entries } = useHomeSeach()

    return (
        <>
            {entries.map((item: i_Home) => (
                <Link href={`/${item.path}`} key={item.name}>
                    <div className={styles.item}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default memo(HomeMap)
