"use client"
import { memo } from "react"
// import useUserCheck from "../userCheck"
import SignInButtons from "./signInButtons"
import SignInInputs from "./signInInputs"
import useSignIn from "./useSignIn"

const SignIn = () => {
    // useUserCheck()

    // const { query } = useRouter()
    const { values, setOnChange, submit, error, loading } = useSignIn()

    // console.log(`XXX: ${query}`)

    return (
        <>
            <form className="l c" onSubmit={submit}>
                {/* <b className="c f">{query ? query : "SignIn"}</b> */}
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
