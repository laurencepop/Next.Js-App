"use client"
import useFetch from "@/hooks/useFetch"
import { options } from "@/hooks/useFetchOptionsGET"
import useRedirUser from "@/hooks/useRedirUser"
import { i_dbItem } from "@/items/interfaces"
import { UserContext } from "@/user/context"
import baseURL from "@/utils/baseURL"
import { useEffect, useState } from "react"

export default function useUserItems() {
    useRedirUser() // redirs to home if user logged in
    const { user } = UserContext()

    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${baseURL}/api/items`,
        options
    )
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
