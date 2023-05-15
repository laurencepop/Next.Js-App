"use client"

import { useEffect, useState } from "react"
import baseURL from "../../functions/baseURL"
import useFetch from "../../hooks/useFetch"
import { options } from "../../hooks/useFetchOptionsGET"
import { i_dbItem } from "../../items/interfaces"

export default function useItems() {
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${baseURL}/api/items`,
        options
    )

    const [items, setItems] = useState<i_dbItem[]>([])

    useEffect(() => {
        data && setItems(data)
    }, [data])

    return { wait, items, err }
}
