"use client"

import { useRouter } from "next/router"
import { i_dbItem } from "../../items/interfaces"

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
