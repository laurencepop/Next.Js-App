"use client"
import useObject from "@/hooks/useObject"
import { reducer } from "@/items/cart/reducer"
import { i_CartItem, i_ItemsContext } from "@/items/interfaces"
import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react"

const Context = createContext({} as i_ItemsContext)
export const CartContext = () => useContext(Context)

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<i_CartItem[]>([])

    const [state, dispatch] = useReducer(reducer, { content: cart })
    const cartAdd = (i: i_CartItem) => dispatch({ type: "addItem", item: i })
    const cartDel = (i: i_CartItem) => dispatch({ type: "delItem", item: i })
    const isObject = useObject<i_CartItem[]>(state.content)

    useEffect(() => {
        if (isObject) {
            localStorage.setItem("cartItems", JSON.stringify(state.content))
            setCart(state.content)
        } else {
            setCart(JSON.parse(String(localStorage.getItem("cartItems") || [])))
        }
    }, [isObject, state])

    const props: i_ItemsContext = {
        cart,
        cartAdd,
        cartDel,
    }
    return <Context.Provider value={props}>{children}</Context.Provider>
}
export default CartContextProvider
