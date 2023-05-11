"use client"
import { memo } from "react"
import MenuButtons from "./menuButtons"
import { NavContext } from "./navContext"

const Menu = () => {
    const { expand } = NavContext()

    return (
        <div id="menu" className={expand ? "show" : "hide"}>
            <MenuButtons isMenu="mainMenu" />
            <MenuButtons isMenu="bottomMenu" />
        </div>
    )
}

export default memo(Menu)
