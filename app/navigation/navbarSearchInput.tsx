"use client"
import { usePathname, useRouter } from "next/navigation"
import { memo, useEffect, useState } from "react"
import { NavContext } from "./navContext"

const InputSearch = () => {
    const { searchValue, setSearchValue } = NavContext()
    const router = useRouter()
    const [goto, setGoto] = useState("/")
    const pathname = usePathname()

    useEffect(() => {
        pathname.includes("items") ? setGoto("/items") : setGoto("/")
    }, [pathname])

    return (
        <div>
            <input
                type="search"
                placeholder="search..."
                pattern=".{2,25}"
                minLength={Number(2)}
                maxLength={Number(25)}
                autoComplete="off"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => router.push(goto)}
            />
        </div>
    )
}

export default memo(InputSearch)
