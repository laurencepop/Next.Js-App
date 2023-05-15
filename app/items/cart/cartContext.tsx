"use client"
import checkObject from "@/functions/checkObject"
import { i_CartItem, i_ItemsContext } from "@/items/interfaces"
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react"
import { reducer } from "./cartReducer"

const Context = createContext({} as i_ItemsContext)
export const CartContext = () => useContext(Context)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<i_CartItem[]>([])

    const [state, dispatch] = useReducer(reducer, { content: cart })
    const cartAdd = (i: i_CartItem) => dispatch({ type: "addItem", item: i })
    const cartDel = (i: i_CartItem) => dispatch({ type: "delItem", item: i })
    const isObject = checkObject<i_CartItem[]>(state.content)

    useEffect(() => {
        if (isObject) {
            localStorage.setItem("cartItems", JSON.stringify(state.content))
            setCart(state.content)
        } else {
            setCart(JSON.parse(String(localStorage.getItem("cartItems") || [])))
        }
    }, [state])

    const props: i_ItemsContext = {
        cart,
        cartAdd,
        cartDel,
    }
    return <Context.Provider value={props}>{children}</Context.Provider>
}
export default CartContextProvider
