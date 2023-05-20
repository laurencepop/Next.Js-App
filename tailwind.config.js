export const content = [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
    extend: {
        gridTemplateColumns: {
            fluid: "repeat(auto-fit,minmax(15rem,1fr))",
        },
    },
}
export const plugins = []
