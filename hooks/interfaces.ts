"use client" //~ useFetch

export interface State<T> {
    wait: boolean
    data?: T
    err?: Error
}

export interface Cache<T> {
    [url: string]: T
}

export interface Action<T> {
    type: "wait" | "data" | "error"
    payload: boolean | T | Error
}

// useExchangeRate

export interface i_rates {
    result: string
    provider: string
    documentation: string
    terms_of_use: string
    time_last_update_unix: number
    time_last_update_utc: Date
    time_next_update_unix: number
    time_next_update_utc: Date
    time_eol_unix: number
    base_code: string
    rates: { [key: string]: number }
}
