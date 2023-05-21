"use client"
import { NavContext } from "@/components/navigation/context"
import useCartCount from "@/items/cart/useCartCount"
import { useRouter } from "next/navigation"
import { memo, useState } from "react"

const ButtonCart = () => {
    const { setSearchValue } = NavContext()
    const { cartCount } = useCartCount()
    const [color, setColor] = useState("")
    const router = useRouter()

    const goToCart = () => {
        if (cartCount !== 0) {
            setSearchValue("")
            router.push("/items/cart")
        } else null
    }

    return (
        <div
            style={
                cartCount === 0
                    ? { color: "#2aa" }
                    : {
                          color: `${color}`,
                          backgroundImage: `url('/images/cart.png')`,
                          cursor: "pointer",
                      }
            }
            onMouseEnter={() => setColor("#fff")}
            onMouseLeave={() => setColor("#2aa")}
            onMouseUp={goToCart}
        >
            {cartCount !== 0 ? cartCount : <p>Welcome!</p>}
        </div>
    )
}

export default memo(ButtonCart)
