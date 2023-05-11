"use client"

import { memo } from "react"
import { NavContext } from "./navContext"

const ButtonMenu = () => {
    const { expand, expandMenu } = NavContext()

    const toggleExpand = () => expandMenu(!expand)

    return (
        <div>
            <input
                id="mBtn"
                type="button"
                value="&#x2261;"
                onMouseUp={toggleExpand}
            />
        </div>
    )
}

export default memo(ButtonMenu)
