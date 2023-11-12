import "../../globals.css"

export const metadata = {
    title: "Netflix",
    description: "Netflix mock up site",
}

export default function NetflixLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`font-['Netflix'] bg-white`}>{children}</body>
        </html>
    )
}
