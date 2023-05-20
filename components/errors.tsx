"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Errors = ({ ...props }) => {
    const router = useRouter()
    const { e_mess, e_stack, e_name, e_cause, reset, location } = props

    useEffect(() => {
        console.log(
            `#### ERROR ####\n> Location: ${location}\nMessage:${e_mess}`
        )
    }, [e_mess, location])

    return (
        <div className="x c">
            <br />
            {e_name && <b className="r">{e_name}</b>}
            <br />
            {location !== "/" && <p>Location: {location}</p>}
            <br />
            {e_mess && <p className="y">Message: {e_mess}</p>}
            <br />
            {e_cause && <p>{e_cause}</p>}
            <br />
            {e_stack && <p>{e_stack}</p>}
            <br />
            <br />
            {location.toString() !== "/" && (
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
            )}
        </div>
    )
}

export default Errors
