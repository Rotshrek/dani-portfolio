"use client"

import Image from "next/image"

export default function SomethingUnexpected({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white h-screen">
            <div className={gridClasses}>
                <div className="md:col-span-1" />
                <div className="md:col-span-6 flex">
                    <div className="m-auto">
                        <p className="font-display text-7xl mb-8 text-lightPurple">Something unexpected happened...</p>
                        <p className="text-lg">Several users expressed disagreement with the design.</p>
                    </div>
                </div>
                <div className="md:col-span-4 flex">
                    <div className="m-auto text-white italic text-xl">
                        <div className="w-[300px] ml-4 p-6 flex-1 bg-lightPink p-2 relative mb-20 rounded">
                            <p>It could be a little bit prettier ... I think it&#39;s a bit simple ...</p>

                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-lightPink"></div>
                        </div>
                        <div className="ml-12 w-[240px] ml-4 p-6 flex-1 bg-lightPink p-2 relative rounded">
                            <p>
                                Too simple, it could be unattractive. Being very simple I felt that it did not give
                                confidence
                            </p>

                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-lightPink"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
