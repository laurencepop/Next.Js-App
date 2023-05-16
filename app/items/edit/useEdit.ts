"use client"
import useValues from "@/hooks/useValues"
import useEditDelete from "@/items/edit/useEditDelete"
import useEditSubmit from "@/items/edit/useEditSubmit"
import { i_Item } from "@/items/interfaces"
import useFetcher from "@/items/useFetcher"
import useUserCheck from "@/items/userCheck"
import { useRouter } from "next/router"
import { useState } from "react"

export default function useEdit() {
    useUserCheck()
    const xxx = useRouter().query
    const { transfer, error, loading, info } = useFetcher()

    console.log(`UUU: ${xxx}`)

    const [values, setValues] = useState<i_Item>({
        name: "",
        image: "",
        price: 0,
        description: "",
        // name: JSON.parse(query.name),
        // image: query.image,
        // price: query.price,
        // description: query.description,
    })

    const setOnChange = useValues(values, setValues)

    const submit = useEditSubmit(transfer, values, "") // query._id
    const deleteItem = useEditDelete(transfer, "") // query._id

    return { values, setOnChange, submit, deleteItem, error, loading, info }
}
