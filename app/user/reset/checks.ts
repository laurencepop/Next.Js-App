
/* export default function checks({ Pw, Pw2, ms, iB, rD, nvg, hdc }) {
	iB.current && (iB.current.style.visibility = "hidden")
	ms.current && (ms.current.style.display = "block")
	ms.current && (ms.current.textContent = "sending...")

	// minimum length check
	for (let el of [ Pw, Pw2 ]) {
		const ell = Number(el.current?.value.length)
		const min = Number(el.current?.minLength)
		if (ell < min) {
			ms.current && (ms.current.textContent = `minimum ${min} chars`)
			el.current?.focus()
			return
		}
	}

	// equal password values check
	if (String(Pw.current?.value) !== String(Pw2.current?.value)) {
		ms.current && (ms.current.textContent = "passwords not equal")
		Pw2.current?.focus()
		return
	}

	rD.current && (rD.current.textContent = "sending...")
	send({ Pw, Pw2, rD, nvg, hdc })
} */
