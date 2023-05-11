"use client"

import { useMemo } from "react"
import { NavContext } from "../navigation/navContext"
import homeEntries from "./home.json"
import { i_Home } from "./interfaces"

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
