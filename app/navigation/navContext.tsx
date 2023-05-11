"use client"

import { createContext, useContext, useState } from "react"
import { i_NavContext } from "./interfaces"

const Context = createContext({} as i_NavContext)
export const NavContext = () => useContext(Context)

const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [expand, expandMenu] = useState(false)
    const [searchValue, setSearchValue] = useState("") // navbar search input

    const props: i_NavContext = {
        expand,
        expandMenu,
        searchValue,
        setSearchValue,
    }
    return <Context.Provider value={props}>{children}</Context.Provider>
}

export default NavContextProvider
