/* export default function checks({ Em, Em2, ms, iB, rD, nvg }) {
	iB.current && (iB.current.style.visibility = "hidden")
	ms.current && (ms.current.style.display = "block")
	ms.current && (ms.current.textContent = "sending...")

	// minimum length check
	for (let el of [ Em, Em2 ]) {
		const ell = Number(el.current?.value.length)
		const min = Number(el.current?.minLength)
		if (ell < min) {
			ms.current && (ms.current.textContent = `minimum ${min} chars`)
			el.current?.focus()
			return
		}
	}

	// valid email format check
	if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(String(Em.current?.value))) {
		ms.current && (ms.current.textContent = "email not valid")
		Em.current?.focus()
		return
	}

	// equal email values check
	if (String(Em.current?.value) !== String(Em2.current?.value)) {
		ms.current && (ms.current.textContent = "emails not equal")
		Em2.current?.focus()
		return
	}

	send({ Em, ms, rD, nvg })
}
 */
