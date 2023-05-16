"use client"

import { Action, State } from "@/hooks/interfaces"

export default function useFetchReducer<T>(initialState: State<T>) {
    const reducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case "wait":
                return { ...initialState, wait: action.payload as boolean }
            case "data":
                return { ...initialState, data: action.payload as T }
            case "error":
                return { ...initialState, err: action.payload as Error }
            default:
                return state
        }
    }

    return reducer
}
