"use client"

import { useRouter } from "next/router"
import { useEffect } from "react"
import { UserContext } from "../user/userContext"

export default function useUserCheck() {
    const { user } = UserContext()
    const router = useRouter()

    useEffect(() => {
        !user &&
            router.push({
                pathname: "/user/signin",
                query: "please sign in",
            })
    }, [user])

    return null
}
