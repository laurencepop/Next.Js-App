const styles = {
    display: "block",
    position: "relative",
    top: "10rem",
    width: "100%",
    margin: 0,
    padding: "4rem 0",
    textAlign: "center",
} as React.CSSProperties

export default function Footer() {
    return (
        <footer>
            <p style={styles}>© 2023 portfolio page</p>
        </footer>
    )
}
