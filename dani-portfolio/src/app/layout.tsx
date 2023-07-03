import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Daniela Fernández",
    description: "UX Designer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-purple"}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
