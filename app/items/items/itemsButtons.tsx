"use client"
import { useRouter } from "next/navigation"
import { memo } from "react"
import { CartContext } from "../../items/cart/cartContext"

const ItemsButtons = ({ ...props }) => {
    const router = useRouter()
    const { cartAdd } = CartContext()

    return (
        <div className="fx m">
            <div className="fc">
                <input
                    type="button"
                    value="details"
                    onMouseUp={() => router.push(`/Items/${props.item._id}`)}
                />
            </div>
            <div className="fc">
                <input
                    type="button"
                    value="to cart"
                    onMouseUp={cartAdd.bind(this, props.item)}
                />
            </div>
        </div>
    )
}

export default memo(ItemsButtons)
