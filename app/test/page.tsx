import Items from "@/app/test/view"
import { i_items } from "@/test/interfaces"

export const metadata = {
    title: "Album",
    keywords: "React.js Next.js TypeScript",
    description: "collection of items",
}

export default async function Page() {
    const api = `${process.env.PHOTOS_API}?offset=5&limit=20`
    const response = await fetch(api, { next: { revalidate: 60 } })
    const items: i_items = await response.json()

    return items.success ? <Items {...items} /> : <p>no items</p>
}
