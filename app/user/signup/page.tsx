"use client"

import SignUpForm from "@/app/user/signup/form"
import useUserCheck from "@/hooks/useUserCheck"
import useSignUp from "@/user/signup/useSignUp"
import { memo } from "react"

const SignUp = () => {
    useUserCheck()
    const { values, setOnChange, submit, error, loading, info } = useSignUp()

    return info.length > 0 ? (
        <h1 className="c y">{info}</h1>
    ) : (
        <>
            <SignUpForm {...{ values, setOnChange, submit, loading }} />
            {error ? <p className="c r">{error}</p> : null}
        </>
    )
}

export default memo(SignUp)
