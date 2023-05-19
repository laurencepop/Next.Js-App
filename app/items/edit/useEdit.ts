"use client"
import useUserCheck from "@/hooks/useUserCheck"
import useValues from "@/hooks/useValues"
import useEditDelete from "@/items/edit/useEditDelete"
import useEditSubmit from "@/items/edit/useEditSubmit"
import { i_Item } from "@/items/interfaces"
import useFetcher from "@/items/useFetcher"
import { useRouter } from "next/router"; // navigation
import { useEffect, useState } from "react"

export default function useEdit() {
    const isUser = useUserCheck()
    const router = useRouter()
    // const router = useRouter().query
    // console.log(`UUU: ${router}`)
    //FIXME check all this!!!!
    useEffect(() => {
        !isUser &&
            router.push({
                pathname: "user/signin",
                query: "please sign in",
            })
    }, [isUser, router])

    const { transfer, error, loading, info } = useFetcher()

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
