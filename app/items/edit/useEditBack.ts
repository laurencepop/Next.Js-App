"use client"

import { useRouter } from "next/router"

export default function useEditBack() {
    const router = useRouter()
    const { position } = useRouter().query

    const back = () => {
        if (position === undefined || position === null) {
            router.back()
        } else {
            router.push({
                pathname: "/Items/user",
                query: {
                    position: position,
                },
            })
        }
    }

    return { back }
}
