"use client"
import { UserContext } from "@/user/context"
import baseURL from "@/utils/baseURL"

export default function SignOut() {
    const { user, setUser } = UserContext()

    const action = async () => {
        const controller = new AbortController()
        let req = new Request(`${baseURL}/api/users/signout`, {
            credentials: "omit", //FIXME same-origin, omit, include
            mode: "cors", //FIXME no-cors, cors, same-origin
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?.token}`,
            },
            signal: controller.signal,
        })
        await fetch(req)
            .then((res) => {
                return res.json()
            })
            .then((response) => {
                delete localStorage.User
                setUser(null)
                console.table(response)
            })
            .catch((error) => {
                //TODO log to back, through server logger ping
                console.log(error.message)
            })
        return () => controller.abort()
    }

    return { action }
}
