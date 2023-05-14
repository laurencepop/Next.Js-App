"use client"

import { useEffect } from "react"

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        console.log(`### GLOBAL ERROR MESSAGE ###\n${error.message}`)
    }, [error])

    return (
        <>
            <b>Global Error</b>
            <br />
            <div className="l c">
                <p>{error.message}</p>
                <br />
                <button onClick={() => reset()}>reset</button>
            </div>
        </>
    )
}

export default GlobalError
