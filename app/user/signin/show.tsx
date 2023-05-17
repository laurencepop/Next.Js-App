"use client"

import styles from "@/user/styles.module.css"
import { memo } from "react"

const SignInShow = ({ ...props }) => {
    const { show, setShow } = props

    return (
        <label className={styles.showPass} htmlFor="checkbox">
            <div className={styles.showPassDiv}>Show password?</div>
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
