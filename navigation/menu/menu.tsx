"use client"

import { NavContext } from "@/navigation/context"
import Buttons from "@/navigation/menu/buttons"
import styles from "@/navigation/menu/styles.module.css"
import capsLock from "@/utils/capsLock"
import mouseUpEvent from "@/utils/mouseUpEvent"

const Menu = () => {
    const { expand } = NavContext()
    mouseUpEvent()
    capsLock()

    return expand ? (
        <div className={styles.menu}>
            <Buttons isMenu="mainMenu" />
            <Buttons isMenu="bottomMenu" />
        </div>
    ) : null
}

export default Menu
