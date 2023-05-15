import CartContextProvider from "@/items/cart/cartContext"
import Menu from "@/navigation/menu"
import NavContextProvider from "@/navigation/navContext"
import Nav from "@/navigation/navbar"
import UserContextProvider from "@/user/userContext"
import Footer from "./components/footer"
import "./globals.css"

export const metadata = {
    title: "Portfolio",
    description: "Next.js React.js TypeScript Tailwind",
}

export default function ({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <UserContextProvider>
                    <NavContextProvider>
                        <Nav />
                        <main>
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
