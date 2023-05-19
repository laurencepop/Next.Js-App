"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Errors = ({ ...props }) => {
    const router = useRouter()
    const { error, reset, location } = props

    useEffect(() => {
        console.log(
            `## ERROR ##\nLocation: ${location}\nMessage:${error.message}`
        )
    }, [error, location])

    return (
        <div className="x c">
            <b className="r">Error</b>
            <br />
            <br />
            <p>Location: {location}</p>
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

export default Errors
