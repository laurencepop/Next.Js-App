"use client"

import Errors from "@/components/errors"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    const e_mess = error.message
    const e_stack = error.stack
    const e_name = error.name
    const e_cause = error.cause
    const location = document.location.pathname

    return (
        <Errors
            {...{ e_mess, e_stack, e_name, e_cause, reset, location }}
        />
    )
}

export default Error
