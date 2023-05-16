"use client"

import { i_Home } from "@/home/interfaces"
import homeEntries from "@/home/items.json"
import { NavContext } from "@/navigation/context"
import { useMemo } from "react"

export default function useHomeSeach() {
    const { searchValue } = NavContext()

    const entries = useMemo(() => {
        return homeEntries.filter((item: i_Home) =>
            [item.name.toLowerCase(), item.description.toLowerCase()].some(
                (item) => item.includes(searchValue.toLowerCase())
            )
        )
    }, [searchValue])

    return { entries }
}
