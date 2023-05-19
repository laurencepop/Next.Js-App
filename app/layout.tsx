import Footer from "@/components/footer"
import CartContextProvider from "@/items/cart/context"
import NavContextProvider from "@/navigation/context"
import Menu from "@/navigation/menu/menu"
import Nav from "@/navigation/navbar/navbar"
import styles from "@/styles/main.module.css"
import "@/styles/universal.css"
import UserContextProvider from "@/user/context"
import { data } from "@/utils/metadata"
import { Metadata } from "next"

export const metadata: Metadata = data

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
