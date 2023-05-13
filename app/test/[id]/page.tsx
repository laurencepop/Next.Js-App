import { i_data, i_item, i_photo } from "../interfaces"
import View from "./view"

// pre-catch/render:
export async function generateStaticParams() {
    const api = `${process.env.PHOTOS_API}?offset=5&limit=20`
    const response = await fetch(api, { next: { revalidate: 60 } })
    const data: i_data = await response.json()
    return data.photos.map((item: i_photo) => ({ photo: item.id.toString }))
} // https://nextjs.org/docs/app/api-reference/functions/generate-static-params

export default async function ({ params }: { params: { id: string } }) {
    const itemUrl = `${process.env.PHOTOS_API}/${params.id}`
    const response = await fetch(itemUrl, { next: { revalidate: 60 } })
    const item: i_item = await response.json()

    return item.success ? <View {...item.photo} /> : <p>no item</p>
}
