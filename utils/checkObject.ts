export default function <T>(data: T) {
    const objectTypeCheck = (data: any) =>
        typeof data === "object" && data !== null

    if (objectTypeCheck(data)) {
        return true
    } else {
        return false
    }
}

//* RETURNS A BOOLEAN!!!
