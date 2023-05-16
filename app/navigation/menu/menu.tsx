"use client"

import capsLock from "@/functions/capsLock"
import mouseUpEvent from "@/functions/mouseUpEvent"
import { NavContext } from "@/navigation/context"
import MenuButtons from "@/navigation/menu/buttons"
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
