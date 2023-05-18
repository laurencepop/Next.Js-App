import ItemsMap from "@/app/home/itemsMap"
import { GitHubLink } from "@/home/githubLink"
import { UserContext } from "@/user/context"

export default async function () {
    const { user } = UserContext()

    return (
        <>
            {user ? <h1 className="c y">Hi {user.name}!</h1> : null}
            <br />
            <GitHubLink />
            <br />
            <ItemsMap />
        </>
    )
}
