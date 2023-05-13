import { i_item } from "../interfaces"
import View from "./view"

export default async function ({ params }: { params: { id: string } }) {
    const id = params.id

    const itemUrl = `https://api.slingacademy.com/v1/sample-data/photos/${id}`

    const response = await fetch(itemUrl)
    const item: i_item = await response.json()

    return item.success ? <View {...item.photo} /> : <p>no item</p>
}
