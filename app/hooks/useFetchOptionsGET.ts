"use client"

export const options: RequestInit = {
    method: "GET",
    credentials: "omit",
    mode: "cors",
    cache: "default",
    redirect: "follow",
    referrer: "",
    integrity: "",
    keepalive: false,
    window: null,
    referrerPolicy: "no-referrer",
    headers: {
        // "Content-Type": "application/json",
    },
}
