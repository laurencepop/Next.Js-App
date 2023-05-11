"use client"

import { useReducer, useRef } from "react"
import { Cache, State } from "./interfaces"
import useFetchFn from "./useFetchFn"
import useFetchReducer from "./useFetchReducer"

function useFetch<T = unknown>(url: string, options: RequestInit): State<T> {
    const cache = useRef<Cache<T>>({})

    const initialState: State<T> = {
        wait: false,
        data: undefined,
        err: undefined,
    }

    const reducer = useFetchReducer(initialState)
    const [state, dispatch] = useReducer(reducer, initialState)
    useFetchFn(url, options, cache, dispatch)

    return state
}

export default useFetch
