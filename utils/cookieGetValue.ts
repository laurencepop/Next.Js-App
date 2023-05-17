export default function (cookieName: string) {
    const cookieValue = document.cookie.match(
        "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
    )

    const isCookie = cookieValue ? cookieValue.pop() : ""
    const cookieVal = String(isCookie).length > 0 ? String(isCookie) : false

    return cookieVal
}

/*
import cookieGetValue from "@/funcs/cookieGetValue"
const cookieData = cookieGetValue('cookieName')
const cookieValue = decodeURIComponent(cookieData)

Get all app cookies into a single variable:
const all = document.cookie
*/
