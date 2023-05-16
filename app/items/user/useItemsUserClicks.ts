"use client"

import { i_dbItem } from "@/items/interfaces"
import { useRouter } from "next/router"

export default function useItemsUserClicks() {
    const router = useRouter()

    const addNew = () => router.replace("/items/new")

    const edit = (item: i_dbItem) => {
        router.push({
            pathname: "/Items/edit",
            query: {
                itemData: JSON.stringify(item),
                position: item._id,
            },
        })
    }

    return { addNew, edit }
}
