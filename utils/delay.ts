export default function Delay(ms: number) {
    return new Promise((resolve) => {
        const timer = setTimeout(resolve, ms * 1000)
        return () => clearTimeout(timer)
    })
}

/*
import Delay from "@/utils/delay"

await Delay(8)
return () // above return
*/
