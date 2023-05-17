"use client"

import { Cache, State } from "@/hooks/interfaces"
import useFetchFn from "@/hooks/useFetchFn"
import useFetchReducer from "@/hooks/useFetchReducer"
import { useReducer, useRef } from "react"

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
