"use client"
import { useEffect, useState } from "react"
import baseURL from "../../functions/baseURL"
import useFetch from "../../hooks/useFetch"
import { options } from "../../hooks/useFetchOptionsGET"
import { i_dbItem } from "../../items/interfaces"
import { UserContext } from "../../user/userContext"
import useUserCheck from "../userCheck"

export default function useUserItems() {
    useUserCheck()
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${baseURL}/api/items`,
        options
    )
    const { user } = UserContext()
    const [items, setItems] = useState<i_dbItem[]>(data || [])

    useEffect(() => {
        user &&
            data &&
            setItems(
                data.filter((item: i_dbItem) => item.userID?.includes(user._id))
            )
    }, [data, user])

    return { wait, err, items }
}
