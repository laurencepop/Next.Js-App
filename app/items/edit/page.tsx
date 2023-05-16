"use client"
import EditButtons from "@/items/edit/buttons"
import useEdit from "@/items/edit/useEdit"
import ItemInputs from "@/items/inputs"
import { memo, useEffect } from "react"

const Edit = () => {
    const { values, setOnChange, submit, deleteItem, error, loading, info } =
        useEdit()

    useEffect(() => {
        document.title = String(`Edit ${values.name}`)
    }, [values.name])

    return info.length > 0 ? (
        <p className="c y">{info}</p>
    ) : (
        <form className="l c" onSubmit={submit}>
            <b>Edit {values.name}</b>
            <ItemInputs {...{ values, setOnChange }} />
            {error ? <p className="s c r">{error}</p> : null}
            {loading ? (
                <b className="c">wait...</b>
            ) : (
                <EditButtons {...{ deleteItem }} />
            )}
        </form>
    )
}

export default memo(Edit)
