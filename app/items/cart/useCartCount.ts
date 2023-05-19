"use client"

import useObject from "@/hooks/useObject"
import { CartContext } from "@/items/cart/context"
import { i_CartItem } from "@/items/interfaces"
import { useEffect, useState } from "react"

export default function useCartCount() {
    const { cart } = CartContext()
    const [cartCount, setCartCount] = useState<number>(0)
    const isObject = useObject<i_CartItem[]>(cart)

    useEffect(() => {
        isObject &&
            setCartCount(
                cart.reduce((count: number, item: { count: number }) => {
                    return count + item.count
                }, 0)
            )
    }, [cart, isObject])

    return { cartCount }
}
