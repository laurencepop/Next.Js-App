"use client"
import { useRouter } from "next/navigation"
import { memo, useCallback, useEffect } from "react"
import SignOut from "../../user/signOut"
import { UserContext } from "../../user/userContext"

const ButtonSignInOut = () => {
    const router = useRouter()
    const { user } = UserContext()

    const { action } = SignOut()
    const signOutButton = useCallback(async () => await action(), [action])

    useEffect(() => {
        const timer = setTimeout(() => signOutButton(), 60 * 60 * 1000)
        return () => clearTimeout(timer)
    }, [signOutButton])

    return (
        <div>
            <input
                type="button"
                className="menuButton"
                value={user ? "\u27B2" : "\u2687"}
                title={user ? "signout" : "signin"}
                onMouseUp={user ? signOutButton : () => router.push("/user/signin")}
                style={user ? { background: "#f00" } : undefined}
            />
        </div>
    )
}

export default memo(ButtonSignInOut)
