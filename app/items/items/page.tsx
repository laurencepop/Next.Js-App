"use client"
import { memo } from "react"
import ItemsMap from "./itemsMap"
import ItemsSort from "./itemsSort"
import useItemsSearch from "./useItemsSearch"

const Items = () => {
    const { wait, err, items, sortItems } = useItemsSearch()

    return wait ? (
        <b className="c">wait...</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c f">{err.message}</p>
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