"use client"

import checkObject from "@/functions/checkObject"
import { UserContext } from "@/user/context"
import { i_User } from "@/user/interfaces"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function useUserCheck() {
    const { user } = UserContext()
    const isObject = checkObject<i_User | null>(user)
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
