export interface i_photo {
    url: string
    description: string
    id: number
    title: string
    user: number
}

export interface i_items {
    success: boolean
    message: string
    offset: number
    limit: number
    photos: i_photo[]
}

export interface i_item {
    success: boolean
    message: string
    photo: i_photo
}
