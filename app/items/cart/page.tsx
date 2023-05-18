"use client"

import Items from "@/app/items/cart/items"
import useExchangeRate from "@/hooks/useExchangeRate"
import CartCurrency from "@/items/cart/currency"
import useCartTotal from "@/items/cart/useCartTotal"
import { memo } from "react"

const Cart = () => {
    const { exchange, currency, setCurrency } = useExchangeRate()
    const { totalPrice } = useCartTotal(exchange)

    return totalPrice === 0 ? (
        <b className="r">empty cart</b>
    ) : (
        <>
            <CartCurrency {...{ currency, setCurrency }} />
            <br />
            <h2 className="c g">{`Total ${totalPrice} ${currency}`}</h2>
            <br />
            <Items {...{ currency, exchange }} />
        </>
    )
}

export default memo(Cart)
