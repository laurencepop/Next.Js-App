"use client"

import ItemInputs from "@/items/inputs"
import useNew from "@/items/new/useNew"
import { memo } from "react"

const New = () => {
    const { values, setOnChange, submit, error, loading, info } = useNew()

    return info.length > 0 ? (
        <p className="c y">{info}</p>
    ) : (
        <form className="l c" onSubmit={submit}>
            <b>New Item</b>
            <ItemInputs {...{ values, setOnChange }} />
            {error ? <p className="s c r">{error}</p> : null}
            {loading ? (
                <b className="c">wait...</b>
            ) : (
                <input type="submit" value="send" />
            )}
        </form>
    )
}

export default memo(New)
