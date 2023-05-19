"use client"

import useSeach from "@/app/home/useSearch"
import { i_Home } from "@/home/interfaces"
import styles from "@/home/styles.module.css"
import useObject from "@/hooks/useObject"
import Link from "next/link"
import { memo } from "react"

const ItemsMap = () => {
    const { items } = useSeach()
    const isObject = useObject<i_Home[]>(items)

    return isObject ? (
        <>
            {items.map((item: i_Home) => (
                <Link href={`/${item.path}`} key={item.name}>
                    <div className={styles.item}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </Link>
            ))}
        </>
    ) : (
        <p>no items</p>
    )
}

export default memo(ItemsMap)
