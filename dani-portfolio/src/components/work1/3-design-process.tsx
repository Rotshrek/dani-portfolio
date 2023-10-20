"use client"

import Image from "next/image"

export default function DesignProcess({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen" id="design-process">
            <div className={gridClasses}>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8">
                    <p className="font-bold text-3xl mb-8 text-center">Design Process</p>
                    <p className="text-md mb-10">
                        We worked through a research phase and a design phase. As we tested with users, it was necessary
                        to iterate and reformulate solutions. At the end of the process, we ended up with a new quoting
                        form and a new design system exclusive for forms.
                    </p>
                    <Image
                        className="m-auto rounded-lg"
                        src="/work1/design-process.png"
                        width={768}
                        height={468}
                        alt="design process from discovery to define to ideate to delivery"
                    />
                </div>
            </div>
        </div>
    )
}
