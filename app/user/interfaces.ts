"use client"

export interface i_User {
    _id: string
    name: string
    token: string
}

export interface i_UserContext {
    user: i_User
    setUser: React.Dispatch<React.SetStateAction<i_User>>
}

export interface i_SignIn {
    email: string
    password: string
}

export interface i_SignUp extends i_SignIn {
    name: string
    email2: string
    password2: string
}
