"use client"
import { memo } from "react"
import useObject from "../../hooks/useObject"
import { i_dbItem } from "../interfaces"
import ItemsUserMap from "./itemsUserMap"
import useUserItems from "./useItemsUser"
import useItemsUserScroll from "./useItemsUserScroll"

const ItemsUser = () => {
    const { wait, err, items } = useUserItems()
    const isObject = useObject<i_dbItem[]>(items)
    useItemsUserScroll()

    return wait ? (
        <b className="c">wait...</b>
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
