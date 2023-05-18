"use client"
import ItemsMap from "@/app/items/items/itemsMap"
import ItemsSort from "@/items/items/sort"
import useItemsSearch from "@/items/items/useItemsSearch"
import { memo } from "react"

const Items = () => {
    const { wait, err, items, sortItems } = useItemsSearch()

    return wait ? (
        <b className="c">wait...</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c">{err.message}</p>
        </>
    ) : items.length > 0 ? (
        <>
            <ItemsSort {...{ sortItems }} />
            <br />
            <ItemsMap {...{ items }} />
        </>
    ) : (
        <h2 className="y c">no items</h2>
    )
}
export default memo(Items)
