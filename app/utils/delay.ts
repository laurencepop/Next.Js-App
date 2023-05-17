export default function (ms: number) {
    return new Promise((resolve) => {
        const timer = setTimeout(resolve, ms * 1000)
        return () => clearTimeout(timer)
    })
}

/*
import delay from "@/utils/delay"

await delay(8)
return () // above return
*/
