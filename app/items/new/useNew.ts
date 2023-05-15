"use client"

import { useState } from "react"
import useValues from "../../hooks/useValues"
import { i_Item } from "../../items/interfaces"
import useUserCheck from "../../items/userCheck"
import useFetcher from "../useFetcher"
import useNewSubmit from "./useNewSubmit"

export default function useEdit() {
    useUserCheck()
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
