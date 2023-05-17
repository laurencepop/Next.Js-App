"use client"

import { NavContext } from "@/navigation/context"
import MenuButtons from "@/navigation/menu/buttons"
import styles from "@/navigation/menu/styles.module.css"
import capsLock from "@/utils/capsLock"
import mouseUpEvent from "@/utils/mouseUpEvent"

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
