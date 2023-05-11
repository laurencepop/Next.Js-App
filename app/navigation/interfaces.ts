"use client"

export interface i_NavContext {
    expand: boolean
    expandMenu: React.Dispatch<React.SetStateAction<boolean>>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export interface i_MenuButton {
    menuName: string
    buttonName: string
    linkPath: string
    // icon: JSX.Element
}
