"use client"

import useObject from "@/hooks/useObject"
import { UserContext } from "@/user/context"
import { i_User } from "@/user/interfaces"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function useUserCheck() {
	const { user } = UserContext()
	const isObject = useObject<i_User>(user)
	const router = useRouter()
	const [isUser, setIsUser] = useState(true)

	useEffect(() => {
		isObject ? router.replace("/") : setIsUser(false)
	}, [ isObject, router ])

	return isUser
}
