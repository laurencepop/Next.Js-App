"use client"
import useCartCount from "@/items/cart/useCartCount"
import { useRouter } from "next/navigation"
import { memo, useState } from "react"

const ButtonCart = () => {
    const { cartCount } = useCartCount()
    const [color, setColor] = useState("")
    const router = useRouter()

    const cartLogo = `url(${require("../../assets/images/cart.png")})`
    const goToCart = () => {
        if (cartCount !== 0) {
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
                          backgroundImage: cartLogo,
                          cursor: "pointer",
                      }
            }
            onMouseEnter={() => setColor("#fff")}
            onMouseLeave={() => setColor("#2aa")}
            onMouseUp={goToCart}
            className="menuButton"
        >
            {cartCount !== 0 ? cartCount : <p>Welcome!</p>}
        </div>
    )
}

export default memo(ButtonCart)
