import "../globals.css"
import { Open_Sans, Scope_One, Bevan } from "next/font/google"
import Navbar from "@/components/common/navbar"

const open_sans = Open_Sans({ subsets: ["latin"], variable: "--font-open_sans", weight: ["400", "700"] })
const scope_one = Scope_One({ subsets: ["latin"], variable: "--font-scope_one", weight: "400" })
const bevan = Bevan({ subsets: ["latin"], variable: "--font-bevan", weight: "400" })

export const metadata = {
    title: "Daniela Fernández",
    description: "UX Designer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${open_sans.variable} ${scope_one.variable} ${bevan.variable} bg-darkPurple font-sans`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
