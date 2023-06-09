"use client"
import { NavContext } from "@/components/navigation/context"
import { i_MenuButton } from "@/components/navigation/interfaces"
import items from "@/components/navigation/menu/items"
import styles from "@/components/navigation/menu/styles.module.css"
import { usePathname, useRouter } from "next/navigation"
import { memo } from "react"

const Buttons = ({ isMenu }: { isMenu: string }) => {
    const { setSearchValue } = NavContext()
    const router = useRouter()
    const pathname = usePathname()

    const doThis = (item: i_MenuButton) => {
        setSearchValue("")
        router.push(`/${item.linkPath}`)
    }

    return (
        <>
            {items.map(
                (item: i_MenuButton) =>
                    item.menuName === isMenu && (
                        <p
                            key={item.buttonName}
                            className={styles.button}
                            onMouseUp={doThis.bind(this, item)}
                            style={
                                //TODO have to fix this. Not working!
                                pathname.startsWith(item.linkPath)
                                    ? { color: "#aa2" }
                                    : undefined
                            }
                        >
                            {item.buttonName}
                        </p>
                    )
            )}
        </>
    )
}

export default memo(Buttons)
