"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { memo } from "react"
import { i_MenuButton } from "../interfaces"
import menuItems from "./items"

const MenuButtons = ({ isMenu }: { isMenu: string }) => {
    const pathname = usePathname()

    return (
        <>
            {menuItems.map(
                (item: i_MenuButton) =>
                    item.menuName === isMenu && (
                        <Link
                            key={item.buttonName}
                            href={item.linkPath}
                            className="p menuButton"
                            style={
                                pathname.startsWith(item.linkPath)
                                    ? { color: "#aa2" }
                                    : undefined
                            }
                        >
                            {/* {item.icon} */}
                            {item.buttonName}
                        </Link>
                    )
            )}
        </>
    )
}

export default memo(MenuButtons)
