"use client"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useApiUrl } from "../../hooks/useApiUrl"
import useFetch from "../../hooks/useFetch"
import { options } from "../../hooks/useFetchOptionsGET"
import { i_dbItem } from "../../items/interfaces"
import { UserContext } from "../../user/userContext"

export default function useUserItems() {
    const api = useApiUrl()
    const { wait, data, err } = useFetch<i_dbItem[]>(
        `${api}/api/items`,
        options
    )
    const { user } = UserContext()
    const [items, setItems] = useState<i_dbItem[]>(data || [])
    const router = useRouter()

    useEffect(() => {
        if (user) {
            data &&
                setItems(
                    data.filter((item: i_dbItem) =>
                        item.userID?.includes(user._id)
                    )
                )
        } else {
            router.replace({
                pathname: "/user/signin",
                query: "please sign in",
            })
        }
    }, [data, user])

    return { wait, err, items }
}
