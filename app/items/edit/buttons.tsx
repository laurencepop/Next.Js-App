"use client"

import useEditBack from "@/items/edit/useEditBack"
import { memo } from "react"

const EditButtons = ({ ...props }) => {
    const { back } = useEditBack()

    return (
        <>
            <div className="fx l">
                <div className="fc">
                    <input type="submit" value="update item" />
                </div>
                <div className="fc">
                    <input
                        type="button"
                        value="delete item"
                        onMouseUp={props.deleteItem}
                    />
                </div>
            </div>
            <br />
            <input type="button" value="back" onMouseUp={back} />
        </>
    )
}

export default memo(EditButtons)
