"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()
    const goHome = () => router.replace("/")

    useEffect(() => {
        setTimeout(goHome, 0) // or 6000 to keep showing code below
    }, [])

    return (
        <div className="c l r">
            <br />
            <br />
            <b>wrong path...</b>
            <br />
            <br />
            <input type="button" value="home" onMouseUp={goHome} />
            <br />
        </div>
    )
}
