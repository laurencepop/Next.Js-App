"use client"

import useFetch from "@/hooks/useFetch"
import { options } from "@/hooks/useFetchOptionsGET"
import useObject from "@/hooks/useObject"
import { i_dbItem } from "@/items/interfaces"
import baseURL from "@/utils/baseURL"
import { useEffect, useState } from "react"

export default function useItems() {
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${baseURL}/api/items`,
        options
    )
    const [items, setItems] = useState<i_dbItem[]>()
    const isObject = useObject<i_dbItem[]>(data!) //! normally just (data) no !
    //FIXME  this error occurs because fetch endpoint api is not fixed/done yet

    useEffect(() => {
        isObject && setItems(data)
    }, [data, isObject])

    return { wait, items, err }
}
