"use client"
import attributes from "@/user/signup/inputs.json"
import { createElement, memo } from "react"

const SignUpForm = ({ ...props }) => {
    const Inputs = attributes.map((val) =>
        createElement("input", {
            key: val.name,
            name: val.name,
            type: val.type,
            placeholder: val.plh,
            onChange: props.setOnChange,
            value: props.values[val.name],
            required: true,
        })
    )

    return (
        <form className="l c" onSubmit={props.submit}>
            <b>SignUp</b>
            {Inputs}
            {props.loading ? (
                <b className="c">wait...</b>
            ) : (
                <input type="submit" value="send" />
            )}
        </form>
    )
}

export default memo(SignUpForm)
