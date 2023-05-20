"use client"
import { memo, useEffect, useState } from "react"

const ButtonTheme = () => {
    const [theme, setTheme] = useState<string>("")

    const toggleTheme = () => (theme === "D" ? setTheme("L") : setTheme("D"))

    useEffect(() => {
        const setColor = (colors: Object) =>
            (Object.entries(colors) as []).map((e) =>
                document.documentElement.style.setProperty(e[0], e[1])
            )

        if (theme.length === 0) setTheme(localStorage.getItem("theme") || "D")
        localStorage.setItem("theme", theme)

        theme === "D"
            ? setColor({
                  "--bk": " #000", // line, els: bg, shadow, border, outline
                  "--bn": "#444", // code bg, hr, btn color
                  "--b": " #222", // color & background
                  "--gy": " #888", // pre
              })
            : setColor({
                  "--bk": " #ccc",
                  "--bn": "#ddd",
                  "--b": " #eee",
                  "--gy": " #bbb",
              })
    }, [theme])

    return (
        <div>
            <input
                type="button"
                value="&#x2699;"
                title={theme === "D" ? "light mode" : "dark mode"}
                className={theme === "D" ? "r" : "y"}
                onMouseUp={toggleTheme}
            />
        </div>
    )
}
export default memo(ButtonTheme)
