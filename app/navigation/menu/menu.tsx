"use client"

import capsLock from "@/functions/capsLock"
import mouseUpEvent from "@/functions/mouseUpEvent"
import { NavContext } from "@/navigation/context"
import MenuButtons from "@/navigation/menu/buttons"
import styles from "./styles.module.css"

const Menu = () => {
    const { expand } = NavContext()
    mouseUpEvent()
    capsLock()

    return expand ? (
        <div className={styles.menu}>
            <MenuButtons isMenu="mainMenu" />
            <MenuButtons isMenu="bottomMenu" />
        </div>
    ) : null
}

export default Menu
