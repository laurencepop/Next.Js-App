"use client"

// import { useEffect, useRef, useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import checks from "./checks"
// import preCheck from "./precheck"

export default function Page() {
    // const nvg = useNavigate()
    // const Pw = useRef<HTMLInputElement>(null!)
    // const Pw2 = useRef<HTMLInputElement>(null!)
    // const ms = useRef<HTMLParagraphElement>(null!)
    // const iB = useRef<HTMLInputElement>(null!)
    // const rD = useRef<HTMLDivElement>(null!)

    // const query = new URLSearchParams(useLocation().search)
    // const h = String(query.get("h"))
    // h === null && nvg("/", { replace: true })
    // let hdc = decodeURIComponent(h)

    // useEffect(() => {
    // 	preCheck(hdc, rD, nvg)
    // }, [ hdc, nvg ])

    // const [ showPw, setShowPw ] = useState(false)
    // const togglePw = () => setShowPw((showPw) => !showPw)

    // const btn = () => checks({ Pw, Pw2, ms, iB, rD, nvg, hdc })

    return (
        <>
            <br />
            <b className="c y">Maintenance</b>
            <br />
            <p>
                This backend is getting converted momentarily from PHP with
                MySQL, to Node.js with Express and MongoDB
            </p>
            <br />
            <p>
                In the meantime, you can check out its old PHP MySQL version in
                action, still functioning on www.LaurenceX.com
            </p>
            <br />
            <p>Please try accessing it again in the next days or weeks!</p>
            {/*
			<b>Reset</b>
			<div className="l c" ref={rD}>
				<input
					type={showPw ? "text" : "password"}
					name="pass"
					ref={Pw} → that that onChange here w e.val & stt
					placeholder="type a new password..."
					title="type a new password"
					pattern=".{6,20}"
					minLength={Number(6)}
					maxLength={Number(20)}
					autoComplete="off"
					required
				/>
				<br />
				<input
					type={showPw ? "text" : "password"}
					name="pass2"
					ref={Pw2} → that that onChange here w e.val & stt
					placeholder="re-type the password..."
					title="type your password"
					pattern=".{6,20}"
					minLength={Number(6)}
					maxLength={Number(20)}
					autoComplete="off"
					required
				/>
				<label className="showPw" htmlFor="checkbox">
					<div>Show passwords?</div>
					<div>
						<input
							id="checkbox"
							type="checkbox"
							checked={showPw}
							onChange={togglePw}
						/>
					</div>
				</label>
				<br />
				<p ref={ms} className="c r"></p>
				<input type="button" ref={iB} value="reset" onMouseUp={btn} />
			</div>
			*/}
        </>
    )
}
