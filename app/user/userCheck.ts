"use client"

import { UserContext } from "@/user/context"
import { i_User } from "@/user/interfaces"
import checkObject from "@/utils/checkObject"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function useUserCheck() {
    const { user } = UserContext()
    const isObject = checkObject<i_User>(user)
    const router = useRouter()

    useEffect(() => {
        isObject && router.replace("/")
    }, [isObject])

    return null
}
