"use client"

import { memo } from "react"
import useEditBack from "./useEditBack"

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
