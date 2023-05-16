"use client"

import { i_dbItem } from "@/items/interfaces"
import ItemsButtons from "@/items/items/buttons"
import Image from "next/image"
import { memo } from "react"
import styles from "../styles.module.css"

const ItemsMap = ({ ...props }) => {
    const { items } = props

    return items.map((item: i_dbItem) => (
        <div className={styles.item} key={item._id}>
            <h2 className="y c">{item.name}</h2>
            <br />
            <Image className={styles.img} src={item.image} alt={item.name} />
            <p className="c">${item.price},-</p>
            <br />
            <ItemsButtons {...{ item }} />
        </div>
    ))
}

export default memo(ItemsMap)
