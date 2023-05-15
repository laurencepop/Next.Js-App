"use client"

export default function useEditSubmit<T>(
    transfer: ({
        ...fetchData
    }: {
        [x: string]: string
    }) => Promise<() => void>,
    values: T,
    itemData_id: string
) {
    const submit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await transfer({ ...values, path: itemData_id, method: "PATCH" })
    }

    return submit
}
