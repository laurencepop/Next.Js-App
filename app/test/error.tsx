"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    const router = useRouter()
    const errorLocation = document.location.pathname

    useEffect(() => {
        console.log(
            `## ERROR ##\nLocation: ${errorLocation}\nMessage:${error.message}`
        )
    }, [ error ])

    return (
        <div className="x c">
            <b className="r">Error</b>
            <br />
            <br />
            <p>Location: {errorLocation}</p>
            <br />
            <p>Message: {error.message}</p>
            <br />
            <br />
            <div className="fx x">
                <div className="fc">
                    <input
                        type="button"
                        value="home"
                        onMouseUp={() => router.replace("/")}
                    />
                </div>
                <div className="fc">
                    <input
                        type="button"
                        value="reset"
                        onMouseUp={() => reset()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Error
