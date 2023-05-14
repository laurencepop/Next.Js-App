"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default async function () {
    const router = useRouter()
    const pathname = usePathname()

    const goHome = () => router.replace("/")

    useEffect(() => {
        setTimeout(goHome, 8000)
    }, [pathname])

    return (
        <div className="c l r">
            <br />
            <br />
            <b className="r">Inexistent path</b>
            <br />
            <p className="c">{pathname}</p>
            <br />
            <br />
            <input type="button" value="home" onMouseUp={goHome} />
            <br />
        </div>
    )
}
