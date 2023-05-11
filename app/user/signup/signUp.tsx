"use client"

import { memo } from "react"
import useUserCheck from "../../user/userCheck"
import SignUpForm from "./signUpForm"
import useSignUp from "./useSignUp"

const SignUp = () => {
    useUserCheck()
    const { values, setOnChange, submit, error, loading, info } = useSignUp()

    return info.length > 0 ? (
        <h1 className="c y f">{info}</h1>
    ) : (
        <>
            <SignUpForm {...{ values, setOnChange, submit, loading }} />
            {error ? <p className="s c r">{error}</p> : null}
        </>
    )
}

export default memo(SignUp)
