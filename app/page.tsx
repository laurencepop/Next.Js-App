"use client"

import { GitHubLink } from "@/home/githubLink"
import View from "@/home/view"
import { UserContext } from "@/user/context"

export default async function () {
    const { user } = UserContext()

    return (
        <>
            {user ? <h1 className="c y">Hi {user.name}!</h1> : null}
            <br />
            <GitHubLink />
            <br />
            <View />
        </>
    )
}
