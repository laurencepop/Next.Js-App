"use client"

import Image from "next/image"
import { memo } from "react"
import { UserContext } from "../../user/userContext"
import ItemButtons from "./ItemButtons"

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
            <Image className="img" src={item.image} alt={item.name} />
            <p className="c">${item.price},-</p>
            <br />
            <ItemButtons {...{ item, userItem }} />
            <br />
        </>
    )
}

export default memo(ItemView)
