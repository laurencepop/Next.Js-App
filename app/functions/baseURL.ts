export default function () {
    return process.env.NODE_ENV === "production"
        ? "https://backend-gkii.onrender.com"
        : "http://127.0.0.1:3001"
}
