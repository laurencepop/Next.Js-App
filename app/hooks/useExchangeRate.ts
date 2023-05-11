"use client"

import { useEffect, useState } from "react"
import { i_rates } from "./interfaces"
import useFetch from "./useFetch"
import { options } from "./useFetchOptionsGET"

export default function useExchangeRate() {
    const [currency, setCurrency] = useState<string>("")
    const [exchange, setExchange] = useState<number>(1)

    const { data, err } = useFetch<i_rates>(
        "https://open.er-api.com/v6/latest/USD",
        options
    )

    useEffect(() => {
        if (currency.length === 0)
            setCurrency(localStorage.getItem("currency") || "USD")

        localStorage.setItem("currency", currency)

        data && setExchange(Number(data.rates[currency]))
        err && err.message //TODO here need server log ping
    }, [currency, data, err])

    return { exchange, currency, setCurrency }
}
