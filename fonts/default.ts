import localFont from "next/font/local"

const fonts = localFont({
    src: [
        {
            path: "../fonts/Neucha.woff",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--f",
    fallback: ["Helvetica", "ui-sans-serif"],
})

export default fonts
