"use client"
import { i_CartItem } from "@/items/interfaces"

const addItemToCart = (item: i_CartItem, state: { content: i_CartItem[] }) => {
    const cartItems = [...state.content]
    // check if item is in cart object yet, and if, get it's position
    const itemIndex = cartItems.findIndex((inCart) => inCart._id === item._id)
    // if item not in cart (index position -1), set count to 1 & add it to state
    itemIndex === -1 && cartItems.push({ ...item, count: 1 })
    if (itemIndex > -1) {
        // get item from cart state object by index position
        const cartItem = { ...cartItems[itemIndex] }
        cartItem.count!++
        cartItems[itemIndex] = cartItem // update item in cart state
    }
    return { ...state.content, content: cartItems }
}

const delItemFromCart = (
    item: i_CartItem,
    state: { content: i_CartItem[] }
) => {
    const cartItems = [...state.content]
    // check if item is in cart object yet, and if, get it's position
    const itemIndex = cartItems.findIndex((inCart) => inCart._id === item._id)
    if (itemIndex > -1) {
        // get item from cart state object by index position
        const cartItem = { ...cartItems[itemIndex] }
        cartItem.count!--
        if (typeof cartItem.count === "number" && cartItem.count >= 1) {
            cartItems[itemIndex] = cartItem // update item in cart state
        } else {
            cartItems.splice(itemIndex, 1) // delete item from cart if count 0
        }
    }
    return { ...state.content, content: cartItems }
}

export const reducer = (
    state: { content: i_CartItem[] },
    action: { type: string; item: i_CartItem }
) => {
    switch (action.type) {
        case "addItem":
            return addItemToCart(action.item, state)
        case "delItem":
            return delItemFromCart(action.item, state)
        default:
            return state
    }
}
