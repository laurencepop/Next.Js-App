"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import baseURL from "../functions/baseURL"
import { UserContext } from "../user/userContext"

export default function useFetcher() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [info, setInfo] = useState("")
    const { setUser } = UserContext()
    const router = useRouter()

    const transfer = async ({ ...fetchData }) => {
        setLoading(true)
        setError("")
        setInfo("")

        const controller = new AbortController()
        try {
            let req = new Request(`${baseURL}/api/users/${fetchData.path}`, {
                // mode: "no-cors", //FIXME no-cors, cors, same-origin
                method: fetchData.method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...fetchData }),
                signal: controller.signal,
            })
            const res = await fetch(req)
            const response = await res.json()
            console.table(response)

            if (res.status === 201) {
                //~ SignUp
                setInfo(`Hi ${response}!`)
                setTimeout(() => router.push("/user/signin"), 2000)
            } else if (res.status === 200) {
                //~ SignIn
                setUser(response)
                router.replace("/")
            } else {
                setError(response)
            }
        } catch (error) {
            error && setError(error.toString())
            setTimeout(() => {
                router.replace("/")
            }, 10000)
        }

        setLoading(false)
        return () => controller.abort()
    }

    return { transfer, error, loading, info }
}
