"use client"

import styles from "@/components/loader/styles.module.css"
import { useEffect, useRef } from "react"

export default function PageLoader() {
    const loader = useRef<HTMLDivElement>(null!)

    useEffect(() => {
        if (typeof document && document.readyState === "complete") {
            document.getElementsByTagName("body")[0].style.height = "0"
            loader.current && (loader.current.style.display = "none")
        } else {
            document.getElementsByTagName("body")[0].style.height = "auto"
            loader.current && (loader.current.style.display = "block")
        }
    })

    return (
        <div ref={loader} className={styles.preloader}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
            </div>
        </div>
    )
}
