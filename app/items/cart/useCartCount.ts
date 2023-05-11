"use client"

import useObject from "@/app/hooks/useObject"
import { useEffect, useState } from "react"
import { i_CartItem } from "../interfaces"
import { CartContext } from "./cartContext"

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
    }, [cart])

    return { cartCount }
}
