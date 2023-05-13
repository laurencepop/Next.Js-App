import { i_data, i_photo } from "./interfaces"
import View from "./view"

export default async function () {
    const api = `${process.env.PHOTOS_API}?offset=5&limit=20`
    const response = await fetch(api, { next: { revalidate: 6 } })
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
