"use client"
import { NavContext } from "@/navigation/context"
import { i_MenuButton } from "@/navigation/interfaces"
import menuItems from "@/navigation/menu/items"
import { usePathname, useRouter } from "next/navigation"
import { memo } from "react"
import styles from "./styles.module.css"

const MenuButtons = ({ isMenu }: { isMenu: string }) => {
    const { setSearchValue } = NavContext()
    const router = useRouter()
    const pathname = usePathname()

    const doThis = (item: i_MenuButton) => {
        setSearchValue("")
        router.push(`/${item.linkPath}`)
    }

    return (
        <>
            {menuItems.map(
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

export default memo(MenuButtons)
