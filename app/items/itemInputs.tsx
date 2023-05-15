"use client"
import { memo } from "react"

const ItemInputs = ({ ...props }) => {
    return (
        <>
            <input
                name="name"
                type="text"
                placeholder="item name..."
                onChange={props.setOnChange}
                value={props.values.name}
                required
            />
            <input
                name="image"
                type="text"
                placeholder="image path..."
                onChange={props.setOnChange}
                value={props.values.image}
                required
            />
            <input
                //FIXME all over where this number, check
                name="price"
                type="number"
                placeholder="item price..."
                onChange={props.setOnChange}
                value={props.values.price}
                min="0"
                step="0.01"
                data-number-to-fixed="2"
                data-number-stepfactor="100"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency"
                minLength={Number(1)}
                maxLength={Number(105)}
                required
            />
            <textarea
                name="description"
                placeholder="item description..."
                onChange={props.setOnChange}
                value={props.values.description}
                minLength={Number(2)}
                maxLength={Number(360)}
                required
            />
        </>
    )
}

export default memo(ItemInputs)
