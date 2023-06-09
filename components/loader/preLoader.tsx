"use client"

import styles from "@/components/loader/styles.module.css"

export default function Preloader() {
    return (
        <div className={styles.preloader}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
            </div>
        </div>
    )
}
