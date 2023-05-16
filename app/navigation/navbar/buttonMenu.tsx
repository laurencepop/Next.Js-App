"use client"

import { NavContext } from "@/navigation/navContext"
import { memo } from "react"

const ButtonMenu = () => {
    const { expand, expandMenu } = NavContext()

    const toggleExpand = () => expandMenu(!expand)

    return (
        <div>
            <input
                id="mainMenuButton"
                type="button"
                value="&#x2261;"
                onMouseUp={toggleExpand}
            />
        </div>
    )
}

export default memo(ButtonMenu)
