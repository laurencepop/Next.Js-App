"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useObject from "../hooks/useObject"
import { i_User } from "./interfaces"
import { UserContext } from "./userContext"

export default function useUserCheck() {
    const { user } = UserContext()
    const router = useRouter()
    const isObject = useObject<i_User | null>(user)

    useEffect(() => {
        isObject && router.replace("/")
    }, [isObject])

    return null
}
