"use client"

import ButtonCart from "@/components/navigation/navbar/buttonCart"
import ButtonFont from "@/components/navigation/navbar/buttonFont"
import ButtonMenu from "@/components/navigation/navbar/buttonMenu"
import ButtonSignInOut from "@/components/navigation/navbar/buttonSign"
import ButtonTheme from "@/components/navigation/navbar/buttonTheme"
import InputSearch from "@/components/navigation/navbar/searchInput"
import styles from "@/components/navigation/navbar/styles.module.css"
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
