import styles from "@/app/styles.module.css"
import Footer from "@/components/footer"
import fonts from "@/fonts/default"
import CartContextProvider from "@/items/cart/context"
import NavContextProvider from "@/navigation/context"
import Menu from "@/navigation/menu/menu"
import Nav from "@/navigation/navbar/navbar"
import "@/styles/global.css"
import UserContextProvider from "@/user/context"
import { data } from "@/utils/metadata"
import { Metadata } from "next"

export const metadata: Metadata = data

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html className={`${styles.html} ${fonts.variable}`} lang="en">
            <body className={styles.body}>
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
