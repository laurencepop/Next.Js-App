"use client"

import { useCallback, useEffect } from "react"
import { NavContext } from "../navigation/navContext"

export default function() {
    const { expandMenu, setSearchValue } = NavContext()

    const mouse = useCallback(
        (e: MouseEvent) => {
            e.preventDefault()
            let element = e.target as HTMLElement

            // if click not on menu or section btn: contract main menu
            element.id !== "mainMenuButton" &&
                !element.classList.contains("sectionButton") &&
                expandMenu(false)

            // on menu btn click: empty search input
            element.classList.contains("menuButton") && setSearchValue("")
        },
        [expandMenu, setSearchValue]
    )

    useEffect(() => {
        window.addEventListener("mouseup", mouse)
        return () => window.removeEventListener("mouseup", mouse)
    }, [mouse])

    return null
}
