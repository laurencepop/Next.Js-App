"use client"

// import { useRef } from "react"
// import { useNavigate } from "react-router-dom"

// import checks from "./checks"

export default function Recovery() {
    // const Em = useRef<HTMLInputElement>(null!)
    // const Em2 = useRef<HTMLInputElement>(null!)
    // const ms = useRef<HTMLParagraphElement>(null!)
    // const iB = useRef<HTMLInputElement>(null!)
    // const rD = useRef<HTMLDivElement>(null!)
    // const nvg = useNavigate()

    // const btn = () => checks({ Em, Em2, ms, iB, rD, nvg })

    return (
        <>
            <br />
            <b className="c y">Maintenance</b>
            <br />
            <p>
                This section's backend is getting converted momentarily from PHP
                with MySQL, to Node.js with Express and MongoDB
            </p>
            <br />
            <p>
                In the meantime, you can check out its old PHP MySQL version in
                action, still functioning on www.LaurenceX.com
            </p>
            <br />
            <p>Please try accessing it again in the next days or weeks!</p>
            {/*
			<b>Recovery</b>
			<div className="l c" ref={rD}>
				<input
					type="email"
					name="email"
					ref={Em} → that that onChange here w e.val & stt
					placeholder="type your email..."
					title="type your email"
					pattern=".{5,40}"
					minLength={Number(5)}
					maxLength={Number(40)}
					autoComplete="off"
					required
				/>
				<br />
				<input
					type="email"
					ref={Em2} → that that onChange here w e.val & stt
					placeholder="re-type your email..."
					title="type your email"
					pattern=".{5,40}"
					minLength={Number(5)}
					maxLength={Number(40)}
					autoComplete="off"
					required
				/>
				<br />
				<p ref={ms} className="c r"></p>
				<input type="button" ref={iB} value="check" onMouseUp={btn} />
			</div>
			*/}
        </>
    )
}
