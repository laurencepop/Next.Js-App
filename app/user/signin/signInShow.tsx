"use client"

import { memo } from "react"

const SignInShow = ({ ...props }) => {
    const { show, setShow } = props

    return (
        <label className="showPass" htmlFor="checkbox">
            <div>Show password?</div>
            <div>
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={show}
                    onChange={() => setShow((show: boolean) => !show)}
                />
            </div>
        </label>
    )
}
export default memo(SignInShow)
