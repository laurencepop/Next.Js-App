"use client"

import { i_User } from "@/app/user/interfaces"
import useObject from "@/hooks/useObject"
import useValues from "@/hooks/useValues"
import { i_Item } from "@/items/interfaces"
import useNewSubmit from "@/items/new/useNewSubmit"
import useFetcher from "@/items/useFetcher"
import { UserContext } from "@/user/context"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function useEdit() {
    const { user } = UserContext()
    const isObject = useObject<i_User | null>(user)

    const router = useRouter()
    // FIXME check if this all works!
    useEffect(() => {
        !isObject &&
            router.push({
                pathname: "user/signin",
                query: "please sign in",
            })
    }, [isObject, router])

    const { transfer, error, loading, info } = useFetcher()

    const [values, setValues] = useState<i_Item>({
        name: "",
        //TODO img uploader (when server)
        image: "https://pngimg.com/uploads/icq/icq_PNG13.png",
        price: 0,
        description: "",
    })

    const setOnChange = useValues(values, setValues)
    const submit = useNewSubmit(transfer, values)

    return { values, setOnChange, submit, error, loading, info }
}
