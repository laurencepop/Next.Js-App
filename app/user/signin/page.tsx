"use client"

import useRedirUser from "@/hooks/useRedirUser"
import SignInButtons from "@/user/signin/buttons"
import SignInInputs from "@/user/signin/inputs"
import useSignIn from "@/user/signin/useSignIn"
import { useRouter } from "next/router"
import { memo } from "react"

const SignIn = () => {
    useRedirUser() // redirs to home if user logged in
    //FIXME check this 2 lines below:
    const router = useRouter()
    console.log(`XXX: ${JSON.stringify(router)}`)

    const { values, setOnChange, submit, error, loading } = useSignIn()

    return (
        <>
            <form className="l c" onSubmit={submit}>
                {/* <b className="c">{router ? router : "SignIn"}</b> */}
                <SignInInputs {...{ values, setOnChange }} />
                <br />
                {loading ? (
                    <b className="c">wait...</b>
                ) : (
                    <>
                        {error ? <p className="c r">{error}</p> : null}
                        <input type="submit" value="send" />
                    </>
                )}
            </form>
            <br />
            <SignInButtons />
        </>
    )
}
export default memo(SignIn)
