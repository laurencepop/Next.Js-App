"use client"

import { NavContext } from "@/components/navigation/context"
import Buttons from "@/components/navigation/menu/buttons"
import styles from "@/components/navigation/menu/styles.module.css"
import useCapsLock from "@/hooks/useCapsLock"
import useMouseUp from "@/hooks/useMouseUp"

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
