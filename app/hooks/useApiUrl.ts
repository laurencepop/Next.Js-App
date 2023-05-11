"use client"

export function useApiUrl() {
    return process.env.NODE_ENV === "production"
        ? "https://backend-gkii.onrender.com"
        : ""
}
