"use client"

import { useEffect } from "react"

export default function GlobalError({
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
        <>
            <b>Error</b>
			<br />
            <div className="l c">
                <p>{error.message}</p>
                <br />
                <button onClick={() => reset()}>reset</button>
            </div>
        </>
    )
}
