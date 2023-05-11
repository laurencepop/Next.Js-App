"use client"
import { memo, useEffect } from "react"
import ItemInputs from "../../items/itemInputs"
import EditButtons from "./editButtons"
import useEdit from "./useEdit"

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
