"use client"
import { useRouter } from "next/router"
import { useState } from "react"
import useValues from "../../hooks/useValues"
import { i_Item } from "../interfaces"
import useFetcher from "../useFetcher"
import useUserCheck from "../userCheck"
import useEditDelete from "./useEditDelete"
import useEditSubmit from "./useEditSubmit"

export default function useEdit() {
    useUserCheck()
	const xxx = useRouter().query
    const { transfer, error, loading, info } = useFetcher()

	console.log(`UUU: ${xxx}`)

    const [values, setValues] = useState<i_Item>({
		name: "",
        image: "",
        price:0,
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
