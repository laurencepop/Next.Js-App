"use client"

import useFetch from "@/hooks/useFetch"
import { options } from "@/hooks/useFetchOptionsGET"
import { i_dbItem } from "@/items/interfaces"
import baseURL from "@/utils/baseURL"
import checkObject from "@/utils/checkObject"
import { useEffect, useState } from "react"

export default function useItems() {
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${baseURL}/api/items`,
        options
    )
    const [items, setItems] = useState<i_dbItem[]>([])
    const isObject = checkObject<i_dbItem[]>(data)
    //FIXME  this error occurs because fetch endpoint api is not fixed/done yet

    useEffect(() => {
        isObject && setItems(data)
    }, [isObject])

    return { wait, items, err }
}
