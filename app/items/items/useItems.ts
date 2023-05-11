"use client"

import { useEffect, useState } from "react"
import { useApiUrl } from "../../hooks/useApiUrl"
import useFetch from "../../hooks/useFetch"
import { options } from "../../hooks/useFetchOptionsGET"
import { i_dbItem } from "../../items/interfaces"

export default function useItems() {
    const api = useApiUrl()
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${api}/api/items`,
        options
    )
    const [items, setItems] = useState<i_dbItem[]>([])

    useEffect(() => {
        data && setItems(data)
    }, [data])

    return { wait, items, err }
}
