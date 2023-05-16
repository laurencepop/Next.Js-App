"use client"

import useValues from "@/hooks/useValues"
import { i_SignIn } from "@/user/interfaces"
import useFetcher from "@/user/useFetcher"
import { useState } from "react"

export default function useSignIn() {
    const { transfer, error, loading } = useFetcher()

    const [values, setValues] = useState<i_SignIn>({
        email: "",
        password: "",
    })

    // useEffect(() => {
    //     values.email.length < 6 && console.log("Invalid email")
    //     !values.password && console.log("password required")
    // }, [values.email.length, values.password]) //* all demo: no implemented

    const setOnChange = useValues(values, setValues)

    const submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await transfer({ ...values, path: "signin", method: "POST" })
    }

    return { values, setOnChange, submit, error, loading }
}
