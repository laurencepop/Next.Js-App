"use client"

import ButtonCart from "@/navigation/navbarButtonCart"
import ButtonFont from "@/navigation/navbarButtonFont"
import ButtonMenu from "@/navigation/navbarButtonMenu"
import ButtonSignInOut from "@/navigation/navbarButtonSign"
import ButtonTheme from "@/navigation/navbarButtonTheme"
import InputSearch from "@/navigation/navbarSearchInput"
import { memo } from "react"

const Nav = () => {
    return (
        <nav>
            <ButtonMenu />
            <ButtonCart />
            <InputSearch />
            <ButtonFont />
            <ButtonTheme />
            <ButtonSignInOut />
        </nav>
    )
}

export default memo(Nav)
