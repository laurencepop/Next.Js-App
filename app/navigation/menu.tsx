"use client"
import { useCapsOn } from "@/hooks/useCapsOn"
import { useMouseUp } from "@/hooks/useMouseUp"
import MenuButtons from "@/navigation/menuButtons"
import { NavContext } from "@/navigation/navContext"
import { memo } from "react"

const Menu = () => {
    const { expand } = NavContext()
    useMouseUp()
    useCapsOn()

    return (
        <div id="menu" className={expand ? "show" : "hide"}>
            <MenuButtons isMenu="mainMenu" />
            <MenuButtons isMenu="bottomMenu" />
        </div>
    )
}

export default memo(Menu)
