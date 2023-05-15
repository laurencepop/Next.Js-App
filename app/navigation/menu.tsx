"use client"

import capsLock from "@/functions/capsLock"
import mouseUpEvent from "@/functions/mouseUpEvent"
import MenuButtons from "@/navigation/menuButtons"
import { NavContext } from "@/navigation/navContext"
import { memo } from "react"

const Menu = () => {
    const { expand } = NavContext()
    mouseUpEvent()
    capsLock()

    return (
        <div id="menu" className={expand ? "show" : "hide"}>
            <MenuButtons isMenu="mainMenu" />
            <MenuButtons isMenu="bottomMenu" />
        </div>
    )
}

export default memo(Menu)
