"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default async function Page() {
    const router = useRouter()
    const pathname = usePathname()
    let path: string = decodeURIComponent(pathname)

    const goHome = () => router.replace("/")

    useEffect(() => {
        setTimeout(() => router.replace("/"), 8000)
    }, [pathname, router])

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
