"use client"
import checkObject from "@/functions/checkObject"
import CartItemButtons from "@/items/cart/buttons"
import { CartContext } from "@/items/cart/context"
import { i_CartItem } from "@/items/interfaces"
import Image from "next/image"
import { memo } from "react"
import styles from "../styles.module.css"

const CartItems = ({ ...props }) => {
    const { cart, cartAdd, cartDel } = CartContext()
    const isObject = checkObject<i_CartItem[]>(cart)

    return isObject ? (
        <>
            {cart.map((item: i_CartItem) => (
                <div className={styles.item} key={item._id}>
                    <h2>{item.name}</h2>
                    <Image
                        className={styles.img}
                        src={item.image}
                        alt={item.name}
                    />
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
