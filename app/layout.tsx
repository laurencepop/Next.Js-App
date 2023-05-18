import Footer from "@/app/footer"
import CartContextProvider from "@/items/cart/context"
import NavContextProvider from "@/navigation/context"
import Menu from "@/navigation/menu/menu"
import Nav from "@/navigation/navbar/navbar"
import styles from "@/styles/main.module.css"
import "@/styles/universal.css"
import UserContextProvider from "@/user/context"
import Head from "@/utils/head"

export const metadata = {
    title: "Portfolio",
    keywords: "React.js Next.js TypeScript",
    description: "Next.js React.js TypeScript Tailwind",
}

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head />
            <body>
                <UserContextProvider>
                    <NavContextProvider>
                        <Nav />
                        <main className={styles.main}>
                            <div>
                                <Menu />
                            </div>
                            <CartContextProvider>
                                <div>{children}</div>
                            </CartContextProvider>
                        </main>
                        <Footer />
                    </NavContextProvider>
                </UserContextProvider>
            </body>
        </html>
    )
}
