"use client"

import { useRouter } from "next/router"
import { useEffect } from "react"
import useObject from "../hooks/useObject"
import { i_User } from "../user/interfaces"
import { UserContext } from "../user/userContext"

export default function useUserCheck() {
    const { user } = UserContext()
    const isObject = useObject<i_User | null>(user)
    const router = useRouter()

    // useEffect(() => {
    //     !isObject &&
    //         router.push({
    //             pathname: "user/signin",
    //             query: "please sign in",
    //         })
    // }, [user])

    useEffect(() => {
        isObject && router.replace("/")
    }, [isObject])

    return null
}
