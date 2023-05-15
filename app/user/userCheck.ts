"use client"

import useObject from "@/hooks/useObject"
import { i_User } from "@/user/interfaces"
import { UserContext } from "@/user/userContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function useUserCheck() {
    const { user } = UserContext()
    const isObject = useObject<i_User | null>(user)
    const router = useRouter()

    useEffect(() => {
        isObject && router.replace("/")
    }, [isObject])

    return null
}
