"use client"
import checkObject from "@/functions/checkObject"
import { i_dbItem } from "@/items/interfaces"
import useUserItems from "@/items/user/useItemsUser"
import useItemsUserScroll from "@/items/user/useItemsUserScroll"
import ItemsUserMap from "@/items/user/view"
import { memo } from "react"

const ItemsUser = () => {
    const { wait, err, items } = useUserItems()
    const isObject = checkObject<i_dbItem[]>(items)
    useItemsUserScroll()

    return wait ? (
        <b className="c">wait@/items.</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c">{err.message}</p>
        </>
    ) : isObject ? (
        <ItemsUserMap {...{ items }} />
    ) : (
        <b className="c">no data</b>
    )
}

export default memo(ItemsUser)
