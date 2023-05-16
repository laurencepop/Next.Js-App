"use client"

import Image from "next/image"
import styles from "./styles.module.css"

export const GitHubLink = () => {
    return (
        <div
            className="c cursor"
            onMouseUp={() => {
                window.open(
                    "https://github.com/laurencepop",
                    "_blank",
                    "noopener,noreferrer"
                )
            }}
        >
            <Image
                src="https://user-images.githubusercontent.com/121040484/229377431-93693963-4369-4e90-bb0f-0517987df8b5.png"
                alt="GitHub"
                className={styles.img}
                width={80}
                height={80}
            ></Image>
            <p className="c g">App source code on GitHub</p>
        </div>
    )
}
