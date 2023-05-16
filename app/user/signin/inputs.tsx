"use client"
import SignInShow from "@/user/signin/show"
import { memo, useState } from "react"

const SignInInputs = ({ ...props }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <input
                name="email"
                type="email"
                placeholder="type your email..."
                onChange={props.setOnChange}
                value={props.values.email}
                required
            />
            <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="type your password..."
                onChange={props.setOnChange}
                value={props.values.password}
                required
            />
            <SignInShow {...{ show, setShow }} />
        </>
    )
}

export default memo(SignInInputs)
