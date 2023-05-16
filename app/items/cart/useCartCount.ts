"use client"

import checkObject from "@/functions/checkObject"
import { CartContext } from "@/items/cart/context"
import { i_CartItem } from "@/items/interfaces"
import { useEffect, useState } from "react"

export default function useCartCount() {
    const { cart } = CartContext()
    const [cartCount, setCartCount] = useState<number>(0)

    const isObject = checkObject<i_CartItem[]>(cart)

    useEffect(() => {
        isObject &&
            setCartCount(
                cart.reduce((count: number, item: { count: number }) => {
                    return count + item.count
                }, 0)
            )
    }, [cart])

    return { cartCount }
}
