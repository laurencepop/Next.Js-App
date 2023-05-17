"use client"

import ButtonCart from "@/navigation/navbar/buttonCart"
import ButtonFont from "@/navigation/navbar/buttonFont"
import ButtonMenu from "@/navigation/navbar/buttonMenu"
import ButtonSignInOut from "@/navigation/navbar/buttonSign"
import ButtonTheme from "@/navigation/navbar/buttonTheme"
import InputSearch from "@/navigation/navbar/searchInput"
import styles from "@/navigation/navbar/styles.module.css"
import { memo } from "react"

const Nav = () => {
    return (
        <nav className={styles.nav}>
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
