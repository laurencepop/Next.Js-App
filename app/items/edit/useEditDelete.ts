"use client"

export default function useEditDelete(
    transfer: ({
        ...fetchData
    }: {
        [x: string]: string
    }) => Promise<() => void>,
    itemData_id: string
) {
    const deleteItem = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await transfer({ path: itemData_id, method: "DELETE" })
    }

    return deleteItem
}
