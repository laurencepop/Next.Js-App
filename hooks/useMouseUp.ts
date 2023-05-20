"use client"

import { NavContext } from "@/components/navigation/context"
import { useCallback, useEffect } from "react"

export default function useMouseUp() {
    const { expandMenu } = NavContext()

    const mouse = useCallback(
        (e: MouseEvent) => {
            e.preventDefault()
            let element = e.target as HTMLElement

            // if click not on menu or section btn: contract main menu
            element.id !== "mainMenuButton" &&
                !element.classList.contains("sectionButton") &&
                expandMenu(false)
            //TODO "sectionButton" only when implementing submenu (from archive)
        },
        [expandMenu]
    )

    useEffect(() => {
        window.addEventListener("mouseup", mouse)
        return () => window.removeEventListener("mouseup", mouse)
    }, [mouse])

    return null
}
