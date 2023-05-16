"use client"

// import { useRouter } from "next/router"
import SignInButtons from "@/user/signin/buttons"
import SignInInputs from "@/user/signin/inputs"
import useSignIn from "@/user/signin/useSignIn"
import useUserCheck from "@/user/userCheck"
import { memo } from "react"

const SignIn = () => {
    useUserCheck()
    // const router = useRouter()
    const { values, setOnChange, submit, error, loading } = useSignIn()

    // console.log(`XXX: ${JSON.stringify(router)}`)

    return (
        <>
            <form className="l c" onSubmit={submit}>
                {/* <b className="c f">{router ? router : "SignIn"}</b> */}
                <SignInInputs {...{ values, setOnChange }} />
                <br />
                {loading ? (
                    <b className="c">wait...</b>
                ) : (
                    <>
                        {error ? <p className="s c r">{error}</p> : null}
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
