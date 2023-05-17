export default function (
    tA: React.RefObject<HTMLTextAreaElement>,
    ms: React.RefObject<HTMLParagraphElement>
) {
    if (tA.current) {
        // auto hight
        const oHi = Number(tA.current.offsetHeight)
        const sHi = Number(tA.current.scrollHeight)
        oHi < sHi && (tA.current.style.height = `${sHi}px`)

        const tal = Number(tA.current.value.length)
        const max = Number(tA.current.maxLength)

        // remaining characters //TODO show remaining chars somewhere
        // iB.current &&
        // 	(iB.current.value = `remaining ${max - tal} chars => send`)

        // maximum length //TODO include this on every keyup file
        if (tal === max && ms.current) {
            ms.current.style.display = "block"
            ms.current.style.color = "#f00"
            ms.current.textContent = "maximum length reached"
        }
    }
}
