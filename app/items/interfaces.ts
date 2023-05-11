"use client"

export interface i_Item {
    name: string
    image: string
    price: number
    description: string
}

export interface i_dbItem extends i_Item {
    _id: string
    userID: string
    createdAt: string
    updatedAt?: string
}

export interface i_CartItem {
    _id: string
    name: string
    image: string
    price: number
    count: number
}

export interface i_ItemsContext {
    cart: i_CartItem[]
    cartAdd: (i: i_CartItem) => void
    cartDel: (i: i_CartItem) => void
}
