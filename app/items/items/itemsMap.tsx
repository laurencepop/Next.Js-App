"use client"
import Image from "next/image"
import { memo } from "react"
import useObject from "../../hooks/useObject"
import { i_CartItem } from "../../items/interfaces"
import ItemsButtons from "./itemsButtons"

const ItemsMap = ({ ...props }) => {
    const { items } = props
    const isObject = useObject<i_CartItem[]>(items)

    return isObject ? (
        items.map((item: i_CartItem) => (
            <div className="item x c" key={item._id}>
                <h2 className="y c">{item.name}</h2>
                <br />
                <Image className="img" src={item.image} alt={item.name} />
                <p className="c">${item.price},-</p>
                <br />
                <ItemsButtons {...{ item }} />
            </div>
        ))
    ) : (
        <h2 className="ry c">no items</h2>
    )
}

export default memo(ItemsMap)
