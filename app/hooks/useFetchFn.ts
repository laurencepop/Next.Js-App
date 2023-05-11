"use client"
import { useEffect, useRef } from "react"
import { Action, Cache } from "./interfaces"

export default function useFetchFn<T>(
    url: string,
    options: RequestInit,
    cache: React.MutableRefObject<Cache<T>>,
    dispatch: React.Dispatch<Action<T>>
) {
    const cancelRequest = useRef<boolean>(false)

    useEffect(() => {
        if (!url) return
        cancelRequest.current = false
        dispatch({ type: "wait", payload: true })

        const fetchData = async () => {
            if (cache.current[url]) {
                dispatch({ type: "data", payload: cache.current[url] })
                return
            }
            if (cancelRequest.current) return

            let req = new Request(url, options)
            await fetch(req)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText)
                    }
                    return res.json()
                })
                .then((res) => {
                    cache.current[url] = res as T
                    dispatch({ type: "data", payload: res as T })
                })
                .catch((err) =>
                    dispatch({ type: "error", payload: err as Error })
                )
        }
        void fetchData()
        dispatch({ type: "wait", payload: false })

        return () => {
            cancelRequest.current = true
        }
    }, [cache, options, dispatch, url])

    return null
}
