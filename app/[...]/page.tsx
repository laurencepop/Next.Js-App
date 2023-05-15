"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default async function () {
    const router = useRouter()
    const pathname = usePathname()
    let path: string = decodeURIComponent(pathname)

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
            <p className="c">{path}</p>
            <br />
            <br />
            <input type="button" value="home" onMouseUp={goHome} />
            <br />
        </div>
    )
}
