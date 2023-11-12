import "../../globals.css"

export const metadata = {
    title: "Book flight tickets",
    description: "Wideroe mock up site",
}

export default function WideroeLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`font-['FlamaBook'] bg-white`}>{children}</body>
        </html>
    )
}
