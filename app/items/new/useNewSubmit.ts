"use client"

export default function useNewSubmit<T>(
    transfer: ({
        ...fetchData
    }: {
        [x: string]: string
    }) => Promise<() => void>,
    values: T
) {
    const submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await transfer({ ...values, path: "new", method: "POST" })
    }

    return submit
}
