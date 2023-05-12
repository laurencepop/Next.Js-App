"use client"

import Image from "next/image"
import { memo } from "react"
import { i_dbItem } from "../../items/interfaces"
import ItemsButtons from "./itemsButtons"

const ItemsMap = ({ ...props }) => {
    const { items } = props

    return items.map((item: i_dbItem) => (
        <div className="item x c" key={item._id}>
            <h2 className="y c">{item.name}</h2>
            <br />
            <Image className="img" src={item.image} alt={item.name} />
            <p className="c">${item.price},-</p>
            <br />
            <ItemsButtons {...{ item }} />
        </div>
    ))
}

export default memo(ItemsMap)
