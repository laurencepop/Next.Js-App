"use client"

import { memo } from "react"
import ButtonCart from "./navbarButtonCart"
import ButtonFont from "./navbarButtonFont"
import ButtonMenu from "./navbarButtonMenu"
import ButtonSignInOut from "./navbarButtonSign"
import ButtonTheme from "./navbarButtonTheme"
import InputSearch from "./navbarSearchInput"

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
