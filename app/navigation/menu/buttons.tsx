"use client"
import { i_MenuButton } from "@/navigation/interfaces"
import menuItems from "@/navigation/menu/items"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { memo } from "react"

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
