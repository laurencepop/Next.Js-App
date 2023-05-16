"use client"
import { useSizes } from "@/hooks/useSizes"
import { memo, useEffect, useState } from "react"

const ButtonFont = () => {
    const [wW] = useSizes()
    const [font, setFont] = useState<string>("")

    const toggleFont = () => (font === "J" ? setFont("N") : setFont("J"))

    useEffect(() => {
        let size = wW > 1000 ? 10 : 6.8
        document.documentElement.style.setProperty("font-size", `${size}px`)

        if (font.length === 0) setFont(localStorage.getItem("font") || "N")
        localStorage.setItem("font", font)

        if (font === "J") {
            document.documentElement.style.setProperty("--f", "Jetbrains")
            document.documentElement.style.setProperty("letter-spacing", "0")
        } else {
            document.documentElement.style.setProperty("--f", "Neucha")
            document.documentElement.style.setProperty(
                "letter-spacing",
                "1.4px"
            )
        }
    }, [wW, font])

    return (
        <div>
            <input
                type="button"
                value="&#x267E;"
                title={font === "J" ? "cool font" : "mono font"}
                className={font === "N" ? "r" : "y"}
                onMouseUp={toggleFont}
            />
        </div>
    )
}

export default memo(ButtonFont)
