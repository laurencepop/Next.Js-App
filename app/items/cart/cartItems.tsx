"use client"
import useObject from "@/app/hooks/useObject"
import { i_CartItem } from "@/app/items/interfaces"
import Image from "next/image"
import { memo } from "react"
import { CartContext } from "./cartContext"
import CartItemButtons from "./cartItemButtons"

const CartItems = ({ ...props }) => {
    const { cart, cartAdd, cartDel } = CartContext()
    const isObject = useObject<i_CartItem[]>(cart)

    return isObject ? (
        <>
            {cart.map((item: i_CartItem) => (
                <div className="item x c" key={item._id}>
                    <h2>{item.name}</h2>
                    <Image className="img" src={item.image} alt={item.name} />
                    <p className="c">
                        {`Item total: ${(
                            props.exchange *
                            item.price *
                            item.count
                        ).toFixed(2)} ${props.currency}`}
                    </p>
                    <p className="c g">
                        {`single unit price: ${(
                            props.exchange * item.price
                        ).toFixed(2)} ${props.currency}`}
                    </p>
                    <p className="y c">{`Amount: ${item.count}`}</p>
                    <CartItemButtons {...{ item, cartAdd, cartDel }} />
                </div>
            ))}
        </>
    ) : (
        <b className="c">no data</b>
    )
}
export default memo(CartItems)
