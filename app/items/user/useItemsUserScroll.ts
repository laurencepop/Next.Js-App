"use client"

import { useRouter } from "next/router"

export default function useItemsUserScroll() {
    const { query } = useRouter()

    if (query === undefined || query === null) {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    } else {
        //TODO scroll to el if x equal to position received from edit's state
        // if (el === query) {
        // 	el!.scrollTo({
        // 		top: 100,
        // 		left: 100,
        // 		behavior: "smooth",
        // 	})
        // }
    }

    return null
}
