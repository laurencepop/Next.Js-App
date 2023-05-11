"use client"
import { memo } from "react"

const CartItemButtons = ({ ...props }) => {
    return (
        <div className="fx mini">
            <div className="fc">
                <input
                    type="button"
                    value="+"
                    className="fc"
                    onMouseUp={props.cartAdd.bind(props.this, props.item)}
                />
            </div>
            <div className="fc">
                <input
                    type="button"
                    value="-"
                    className="fc"
                    onMouseUp={props.cartDel.bind(this, props.item)}
                />
            </div>
        </div>
    )
}

export default memo(CartItemButtons)
