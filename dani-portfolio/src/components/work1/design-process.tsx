"use client"

import Image from "next/image"

export default function DesignProcess({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white h-screen">
            <div className={gridClasses}>
                <div className="md:col-span-12">
                    <p className="font-display text-6xl mb-8 text-center">Design Process</p>
                    <Image
                        className="m-auto"
                        src="/design-process.svg"
                        width={768}
                        height={468}
                        alt="design process from discovery to define to ideate to delivery"
                    />
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        We worked through a <strong>research phase and a design phase.</strong>
                    </p>
                    <p className="text-lg">
                        As we tested with users, it was necessary to iterate and reformulate solutions.
                    </p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        <strong>
                            At the end of the process, we ended up with a new quoting form and a new design system
                            exclusive for forms.
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
