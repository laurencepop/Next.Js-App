import { i_data, i_photo } from "@/test/interfaces"
import View from "@/test/view"

export const metadata = {
    title: "Album",
    description: "collection of items",
}

export default async function () {
    const api = `${process.env.PHOTOS_API}?offset=5&limit=20`
    const response = await fetch(api, { next: { revalidate: 60 } })
    const data: i_data = await response.json()

    return data.success ? (
        <div className="grid gap-16 grid-cols-fluid">
            {data.photos.map((item: i_photo) => (
                <View {...item} />
            ))}
        </div>
    ) : (
        <p>no data</p>
    )
}
