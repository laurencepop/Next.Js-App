"use client"
import { useEffect } from "react"

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.log(`ERROR:\n${error}`)
    }, [error])

    return (
        <div className="l c">
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}
