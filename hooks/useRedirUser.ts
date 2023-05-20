"use client"

import useObject from "@/hooks/useObject"
import { UserContext } from "@/user/context"
import { i_User } from "@/user/interfaces"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function useRedirUser() {
    const { user } = UserContext()
    const isObject = useObject<i_User | null>(user)
    const router = useRouter()

    //* REDIRS USERS TO HOME, IF LOGGED IN!!!
    useEffect(() => {
        isObject && router.replace("/")
    }, [isObject, router])

    return null
}
