"use client"
import { useParams } from "next/navigation"
import { memo, useEffect, useState } from "react"
import { useApiUrl } from "../../hooks/useApiUrl"
import useFetch from "../../hooks/useFetch"
import { options } from "../../hooks/useFetchOptionsGET"
import { i_dbItem } from "../../items/interfaces"
import ItemView from "./itemView"

const Item = () => {
    const id = String(useParams().item)
    const api = useApiUrl()
    const { wait, data, err } = useFetch<i_dbItem>(
        `${api}/api/items/${id}`,
        options
    )
    const [item, setItem] = useState<i_dbItem>()

    useEffect(() => {
        if (data) {
            document.title = String(data.name)
            setItem(data)
        }
    }, [data])

    return wait ? (
        <b className="c">wait...</b>
    ) : err ? (
        <>
            <b className="r">Error</b>
            <br />
            <p className="c f">{err.message}</p>
        </>
    ) : item ? (
        <ItemView {...{ item }} />
    ) : null
}

export default memo(Item)