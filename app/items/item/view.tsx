"use client"

import ItemButtons from "@/items/item/buttons"
import styles from "@/items/styles.module.css"
import { UserContext } from "@/user/context"
import Image from "next/image"
import { memo } from "react"

const ItemView = ({ ...props }) => {
    const { user } = UserContext()
    const { item } = props || {}

    let userItem = false // show t edit button below, if t user is t item owner
    if (user?._id === item?.userID) userItem = true

    return (
        <>
            <br />
            <b className="y">{item.name}</b>
            <p className="c">{item.description}</p>
            <br />
            <Image className={styles.img} src={item.image} alt={item.name} />
            <p className="c">${item.price},-</p>
            <br />
            <ItemButtons {...{ item, userItem }} />
            <br />
        </>
    )
}

export default memo(ItemView)
