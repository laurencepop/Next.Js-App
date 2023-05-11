"use client"

const cookieGetVal = (cookieName: string) => {
    const cookieValue = document.cookie.match(
        "(^|;)\\s*" + cookieName + "\\s*=\\s*([^;]+)"
    )

    const isCookie = cookieValue ? cookieValue.pop() : ""
    const cookieVal = String(isCookie).length > 0 ? String(isCookie) : false

    return cookieVal
}

export default cookieGetVal

// ~ usage: cookieGetVal('rd') -> const ck = decodeURIComponent(cnm)

// Get all app cookies into a single variable: const all = document.cookie
