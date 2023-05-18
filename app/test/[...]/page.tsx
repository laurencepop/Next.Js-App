import Item from "@/app/test/[...]/item"
import { i_item } from "@/test/interfaces"
import { Metadata } from "next"

export async function generateMetadata({
    params,
}: {
    params: string[]
}): Promise<Metadata> {
    const key = Object.values(params)[0] // get first url params object key
    const second = key.slice(1, 2) // get second key-value array entry
    return { title: decodeURIComponent(second) }
}

export default async function ({ params }: { params: string[] }) {
    const key = Object.values(params)[0]
    const id = key.slice(0, 1)
    const itemUrl = `${process.env.PHOTOS_API}/${id}`
    const response = await fetch(itemUrl, { next: { revalidate: 60 } })
    const item: i_item = await response.json()

    return item.success ? <Item {...item.photo} /> : <p>no item</p>
}
