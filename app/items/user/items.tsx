"use client"
import { i_dbItem } from "@/items/interfaces"
import useItemsUserClicks from "@/items/user/useItemsUserClicks"
import styles from "@/user/styles.module.css"
import Image from "next/image"
import { memo } from "react"

const Items = ({ ...props }) => {
    const { addNew, edit } = useItemsUserClicks()

    return props.items.length === 0 ? (
        <div className="m c">
            <b className="c y">Info</b>
            <p className="c">you do not have any items yet</p>
            <br />
            <input type="button" value="add" onMouseUp={addNew} />
        </div>
    ) : (
        props.items.map((item: i_dbItem) => (
            <div className={styles.item} key={item._id}>
                <h2 className="y c">{item.name}</h2>
                <br />
                <Image
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                />
                <p className="c">${item.price},-</p>
                <br />
                <input
                    type="button"
                    value="edit"
                    onMouseUp={edit.bind(this, item)}
                />
            </div>
        ))
    )
}

export default memo(Items)
