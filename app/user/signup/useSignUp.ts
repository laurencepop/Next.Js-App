"use client"

import useValues from "@/hooks/useValues"
import { i_SignUp } from "@/user/interfaces"
import useFetcher from "@/user/useFetcher"
import { useState } from "react"

export default function useSignUp() {
    const { transfer, error, loading, info } = useFetcher()

    const [values, setValues] = useState<i_SignUp>({
        name: "",
        email: "",
        email2: "",
        password: "",
        password2: "",
    })

    const setOnChange = useValues(values, setValues)

    const submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await transfer({ ...values, path: "signup", method: "POST" })
    }

    return { values, setOnChange, submit, error, loading, info }
}
