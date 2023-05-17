"use client"

export default function useValues<T>(
    values: T,
    setValues: React.Dispatch<React.SetStateAction<T>>
) {
    const setOnChange = (e: {
        preventDefault: () => void
        target: {
            value: string
            name: string
        }
    }) => setValues({ ...values, [e.target.name]: e.target.value })

    return setOnChange
}
