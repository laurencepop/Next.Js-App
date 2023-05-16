"use client"

import { memo } from "react"

const ItemsSort = ({ ...props }) => {
    return (
        <select onChange={props.sortItems} className="c m">
            <option value="default">default order...</option>
            <option value="byname">order by name</option>
            <option value="cheapest">cheapest first</option>
            <option value="expensive">expensive first</option>
        </select>
    )
}

export default memo(ItemsSort)
