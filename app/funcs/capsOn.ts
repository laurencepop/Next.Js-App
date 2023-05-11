"use client"

import { useCallback, useEffect } from "react"

export function CapsOn() {
	const capsOn = useCallback((e: KeyboardEvent) => {
		e.preventDefault()

		if (typeof e.getModifierState === "function") {
			e.getModifierState("CapsLock") && alert("CapsLock is ON")
		}
	}, [])

	useEffect(() => {
		window.addEventListener("keyup", capsOn)
		return () => window.removeEventListener("keyup", capsOn)
	}, [ capsOn ])

	return null
}
