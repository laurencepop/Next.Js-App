"use client"

import useObject from "@/hooks/useObject"
import { UserContext } from "@/user/context"
import { i_User } from "../user/interfaces"

const User = () => {
    const { user } = UserContext()
    const isObject = useObject<i_User | null>(user)

    return isObject ? <h1 className="c y">Hi {user?.name}!</h1> : null
}

export default User
