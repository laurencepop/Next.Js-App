"use client"

import { useCallback, useEffect } from "react"

export default function () {
    const capsOn = useCallback((event: KeyboardEvent) => {
        event.preventDefault()

        if (typeof event.getModifierState === "function") {
            event.getModifierState("CapsLock") && alert("CapsLock is ON")
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keyup", capsOn)
        return () => window.removeEventListener("keyup", capsOn)
    }, [capsOn])

    return null
}
