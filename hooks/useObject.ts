export default function useObject<T>(data: T) {
    const objectTypeCheck = (data: T) =>
        typeof data === "object" && data !== null

    if (objectTypeCheck(data)) {
        return true
    } else {
        return false
    }
}

//* RETURNS A BOOLEAN, IF USER EXISTS!!!
