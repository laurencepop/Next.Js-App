"use client"

import { useCallback, useEffect } from "react"
import { NavContext } from "../navigation/navContext"

export function MouseUp() {
	const { expandMenu, setSearchValue } = NavContext()

	const mouse = useCallback(
		(e: MouseEvent) => {
			e.preventDefault()
			let element = e.target as HTMLElement

			// if click not on menu or section btn: contract main menu
			element.id !== "mBtn" &&
				!element.classList.contains("sBtn") &&
				expandMenu(false)

			// on menu btn click: empty search input
			element.classList.contains("mB") && setSearchValue("")
		},
		[ expandMenu, setSearchValue ]
	)

	useEffect(() => {
		window.addEventListener("mouseup", mouse)
		return () => window.removeEventListener("mouseup", mouse)
	}, [ mouse ])

	return null
}
