"use client"

import { memo } from "react"

const CartCurrency = ({ ...props }) => {
    return (
        <>
            <select
                onChange={(e) => props.setCurrency(e.target.value)}
                className="c m"
            >
                <option value={props.currency}>choose currency...</option>
                <option value="USD">view in US Dollar</option>
                <option value="EUR">view in Euro</option>
                <option value="GBP">view in Pound Sterling</option>
            </select>
        </>
    )
}

export default memo(CartCurrency)
