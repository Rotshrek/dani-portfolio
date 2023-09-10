"use client"

import Image from "next/image"

export default function DesignProcess({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white">
            <div className={gridClasses}>
                <div className="md:col-span-2" />
                <div className="md:col-span-8">
                    <p className="font-bold text-4xl mb-8 text-center">Design Process</p>
                    <p className="text-md mb-10">
                        We worked through a research phase and a design phase. As we tested with users, it was necessary
                        to iterate and reformulate solutions. At the end of the process, we ended up with a new quoting
                        form and a new design system exclusive for forms.
                    </p>
                    <Image
                        className="m-auto"
                        src="/design-process.svg"
                        width={768}
                        height={468}
                        alt="design process from discovery to define to ideate to delivery"
                    />
                </div>
            </div>
        </div>
    )
}
