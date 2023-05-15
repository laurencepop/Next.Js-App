"use client"

import { useEffect, useState } from "react"
import { i_dbItem } from "../../items/interfaces"
import { NavContext } from "../../navigation/navContext"
import useItemsSort from "./useItemsSort"

export default function useItemsSearch() {
    const { searchValue } = NavContext()
    const { wait, err, itemsList, sortItems } = useItemsSort()
    const [items, setItems] = useState<i_dbItem[]>([])

    useEffect(() => {
        itemsList &&
            setItems(
                itemsList.filter((item: i_dbItem) =>
                    item.name?.toLowerCase().includes(searchValue.toLowerCase())
                )
            )
    }, [itemsList, searchValue]) // on search-input value change

    return { wait, err, items, sortItems }
}
