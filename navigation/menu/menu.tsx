"use client"

import useCapsLock from "@/hooks/useCapsLock"
import useMouseUp from "@/hooks/useMouseUp"
import { NavContext } from "@/navigation/context"
import Buttons from "@/navigation/menu/buttons"
import styles from "@/navigation/menu/styles.module.css"

const Menu = () => {
    const { expand } = NavContext()
    useMouseUp()
    useCapsLock()

    return expand ? (
        <div className={styles.menu}>
            <Buttons isMenu="mainMenu" />
            <Buttons isMenu="bottomMenu" />
        </div>
    ) : null
}

export default Menu
