"use client"

import { NavContext } from "@/components/navigation/context"
import data from "@/home/data.json"
import { i_Home } from "@/home/interfaces"
import { useMemo } from "react"

export default function useHomeSeach() {
    const { searchValue } = NavContext()

    const items = useMemo(() => {
        return data.filter((item: i_Home) =>
            [item.name.toLowerCase(), item.description.toLowerCase()].some(
                (item) => item.includes(searchValue.toLowerCase())
            )
        )
    }, [searchValue])

    return { items }
}
