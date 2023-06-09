"use client"

import useObject from "@/hooks/useObject"
import { CartContext } from "@/items/cart/context"
import { i_CartItem } from "@/items/interfaces"
import { useEffect, useState } from "react"

export default function useCartTotal(exchange: number) {
    const { cart } = CartContext()
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const isObject = useObject<i_CartItem[]>(cart)

    useEffect(() => {
        isObject &&
            setTotalPrice(
                cart.reduce(
                    (count: number, item: { count: number; price: number }) => {
                        let total = count + item.count * item.price * exchange
                        return Number(total.toFixed(2))
                    },
                    0
                )
            )
    }, [cart, exchange, isObject])

    return { exchange, totalPrice }
}
