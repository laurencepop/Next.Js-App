"use client"

import { i_NavContext } from "@/components/navigation/interfaces"
import { useSizes } from "@/hooks/useSizes"
import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext({} as i_NavContext)
export const NavContext = () => useContext(Context)

const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [wW] = useSizes()
    const [expand, expandMenu] = useState(true)
    const [searchValue, setSearchValue] = useState("") // navbar search input

    useEffect(() => {
        wW > 1200 ? expandMenu(true) : expandMenu(false)
    }, [wW])

    const props: i_NavContext = {
        expand,
        expandMenu,
        searchValue,
        setSearchValue,
    }
    return <Context.Provider value={props}>{children}</Context.Provider>
}

export default NavContextProvider
