"use client"
import { useRouter } from "next/router"
import { memo } from "react"
import { CartContext } from "../../items/cart/cartContext"

const ItemButtons = ({ ...props }) => {
    const { cartAdd } = CartContext()
    const router = useRouter()

    const edit = () =>
        router.push({
            pathname: "/Items/edit",
            query: {
                itemData: props.item,
            },
        })

    return (
        <>
            <div className="fx m">
                <div className="fc">
                    <input
                        type="button"
                        value="back"
                        onMouseUp={() => router.back()}
                    />
                </div>
                <div className="fc">
                    {props.userItem ? (
                        <input type="button" value="edit" onMouseUp={edit} />
                    ) : (
                        <input
                            type="button"
                            value="to cart"
                            onMouseUp={cartAdd.bind(this, props.item)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default memo(ItemButtons)
