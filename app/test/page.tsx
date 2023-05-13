import { i_data, i_photo } from "./interfaces"
import View from "./view"

export default async function () {
    const api =
        "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"

    const response = await fetch(api)
    const data: i_data = await response.json()

    console.log(`KEY: ${process.env.KEY_NAME}`)

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
