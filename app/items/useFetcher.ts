"use client"
import baseURL from "@/functions/baseURL"
import { UserContext } from "@/user/context"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function useFetcher() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [info, setInfo] = useState("")
    const router = useRouter()
    const { user } = UserContext()

    const transfer = async ({ ...fetchData }) => {
        setLoading(true)
        setError("")
        setInfo("")

        const controller = new AbortController()
        try {
            let req = new Request(`${baseURL}/api/items/${fetchData.path}`, {
                credentials: "omit", //FIXME same-origin, omit, include
                mode: "cors", //FIXME no-cors, cors, same-origin
                method: fetchData.method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user?.token}`,
                },
                body: JSON.stringify({ ...fetchData }),
                signal: controller.signal,
            })
            const res = await fetch(req)
            const response = await res.json()
            // console.table(response)

            if (res.status === 201) {
                //~ New | Update/Edit
                setInfo(`${response.name} added to Items!`)
                setTimeout(() => router.replace(`/Items/${response._id}`))
            } else if (res.status === 200) {
                //~ Delete Item
                setInfo(`Item ${response} deleted!`)
                setTimeout(() => router.replace("/Items/user"), 4000)
            } else {
                setError(response)
            }
        } catch (error) {
            error && setError(error.toString())
            setTimeout(() => router.push("/"), 10000)
        }

        setLoading(false)
        return () => controller.abort()
    }

    return { transfer, error, loading, info }
}
