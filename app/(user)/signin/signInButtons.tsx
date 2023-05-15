"use client"
import { useRouter } from "next/navigation"
import { memo } from "react"

const SignInButtons = () => {
    const router = useRouter()

    return (
        <div className="fx l">
            <div className="fc">
                <input
                    type="button"
                    value="signup"
                    onMouseUp={() => router.push("/user/signup")}
                />
            </div>
            <div className="fc">
                <input
                    type="button"
                    value="recover"
                    onMouseUp={() => router.push("/user/rec")}
                />
            </div>
        </div>
    )
}

export default memo(SignInButtons)
