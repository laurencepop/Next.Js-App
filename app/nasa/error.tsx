"use client"

import Errors from "@/components/errors"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    const location = document.location.pathname

    return <Errors {...{ error, reset, location }} />
}

export default Error
