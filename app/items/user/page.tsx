"use client"
import useObject from "@/hooks/useObject"
import { i_dbItem } from "@/items/interfaces"
import ItemsUserMap from "@/items/user/itemsUserMap"
import useUserItems from "@/items/user/useItemsUser"
import useItemsUserScroll from "@/items/user/useItemsUserScroll"
import { memo } from "react"

const ItemsUser = () => {
    const { wait, err, items } = useUserItems()
    const isObject = useObject<i_dbItem[]>(items)
    useItemsUserScroll()

    return wait ? (
        <b className="c">wait@/items.</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c f">{err.message}</p>
        </>
    ) : isObject ? (
        <ItemsUserMap {...{ items }} />
    ) : (
        <b className="c">no data</b>
    )
}

export default memo(ItemsUser)
