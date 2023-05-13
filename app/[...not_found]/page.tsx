"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Page() {
    const router = useRouter()

    const goHome = () => router.replace("/")

    useEffect(() => {
        setTimeout(goHome, 6000)
    }, [])

    return (
        <div className="c l r">
            <br />
            <br />
            <h1>wrong path...</h1>
            <br />
            <br />
            <input type="button" value="home" onMouseUp={goHome} />
            <br />
        </div>
    )
}
