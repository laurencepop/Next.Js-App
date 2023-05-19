"use client"

import useObject from "@/hooks/useObject"
import { i_User, i_UserContext } from "@/user/interfaces"
import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext({} as i_UserContext)
export const UserContext = () => useContext(Context)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<i_User | null>(null)
    const isObject = useObject<i_User | null>(user)

    useEffect(() => {
        if (isObject) {
            localStorage.setItem("User", JSON.stringify(user))
        } else {
            setUser(JSON.parse(String(localStorage.getItem("User") || null)))
        }
    }, [user, isObject])

    const props: i_UserContext = { user, setUser }
    return <Context.Provider value={props}>{children}</Context.Provider>
}

export default UserContextProvider
