import ItemsMap from "@/app/home/itemsMap"
import { GitHubLink } from "@/home/githubLink"
import User from "@/home/user"

export default async function Page() {
    return (
        <>
            <User />
            <br />
            <GitHubLink />
            <br />
            <ItemsMap />
        </>
    )
}
