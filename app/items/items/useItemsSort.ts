"use client"
import { i_dbItem } from "@/items/interfaces"
import useItems from "@/items/items/useItems"
import { useEffect, useState } from "react"

export default function useItemsSort() {
    const { wait, err, items } = useItems()
    const [itemsList, setItemsList] = useState<i_dbItem[]>([])

    //FIXME is this useEffect check here really necessary? Check when done!!!
    useEffect(() => {
        items && setItemsList(items)
    }, [items])

    const sortItems = (e: { target: { value: string } }) => {
        const sortChoise: string = e.target.value
        sortChoise === "default" &&
            setItemsList(
                [...items].sort((a, b) =>
                    String(a.updatedAt).localeCompare(String(b.updatedAt))
                )
            )
        sortChoise === "byname" &&
            setItemsList(
                [...items].sort((a, b) =>
                    String(a.name).localeCompare(String(b.name))
                )
            )
        sortChoise === "cheapest" &&
            setItemsList(
                [...items].sort((a, b) => Number(a.price) - Number(b.price))
            )
        sortChoise === "expensive" &&
            setItemsList(
                [...items].sort((a, b) => Number(b.price) - Number(a.price))
            )
    }

    return { wait, err, itemsList, sortItems }
}
