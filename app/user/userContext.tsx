"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { i_User, i_UserContext } from "./interfaces"

const Context = createContext({} as i_UserContext)
export const UserContext = () => useContext(Context)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<i_User | null>(null)

    useEffect(() => {
        if (user) {
            localStorage.setItem("User", JSON.stringify(user))
        } else {
            const usr = JSON.parse(String(localStorage.getItem("User" || null)))
            usr && setUser(usr)

            //FIXME deal here with all e, rd, etc server scenarios from old php?
        }
    }, [user])

    const props: i_UserContext = { user, setUser }
    return <Context.Provider value={props}>{children}</Context.Provider>
}

export default UserContextProvider
