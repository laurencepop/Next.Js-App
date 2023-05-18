"use client"
import Items from "@/app/items/user/items"
import { i_dbItem } from "@/items/interfaces"
import useUserItems from "@/items/user/useItemsUser"
import useItemsUserScroll from "@/items/user/useItemsUserScroll"
import checkObject from "@/utils/checkObject"
import { memo } from "react"

const ItemsUser = () => {
    const { wait, err, items } = useUserItems()
    const isObject = checkObject<i_dbItem[]>(items)
    useItemsUserScroll()

    return wait ? (
        <b className="c">wait...</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c">{err.message}</p>
        </>
    ) : isObject ? (
        <Items {...{ items }} />
    ) : (
        <b className="c">no data</b>
    )
}

export default memo(ItemsUser)
