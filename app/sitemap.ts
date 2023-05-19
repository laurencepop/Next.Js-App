// import { i_data, i_photo } from "@/test/interfaces"
// import { MetadataRoute } from "next"

// TODO get this done with:
// https://nextjs.org/learn/seo/crawling-and-indexing/xml-sitemaps
// https://www.npmjs.com/package/next-sitemap
//FIXME change host with domain name

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
// const ishost = String(window.location.host)
// const host = ishost.replace(/\s/g, "").trim()

// const response = await fetch(`${process.env.PHOTOS_API}`)
// const data: i_data = await response.json()

// const photos = data.photos.map((item: i_photo) => ({
//     url: `${host}/test/${item.id}`,
//     lastModified: new Date().toISOString,
// }))

// also same as photos with items here

// const routes = [
//     "",
//     "contact",
//     "items/items",
//     "user/signin",
//     "user/signup",
// ].map((route: string) => ({
//     url: `${host}/${route}`,
//     lastModified: new Date().toISOString,
// }))

// return [...photos, ...items, ...routes]
// }
