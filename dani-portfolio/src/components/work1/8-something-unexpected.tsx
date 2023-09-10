"use client"

export default function SomethingUnexpected({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white md:h-screen">
            <div className={gridClasses + "auto-rows-max"}>
                <div className="md:col-span-1" />
                <div className="md:col-span-6 md:flex">
                    <div className="m-auto">
                        <p className="font-display text-5xl md:text-7xl mb-8 text-lightPurple">
                            Something unexpected happened...
                        </p>
                        <p className="text-lg">Several users expressed disagreement with the design.</p>
                    </div>
                </div>
                <div className="md:col-span-5 flex opacity-70">
                    <div className="m-auto italic text-xl">
                        <div className="w-[280px] ml-10 p-6 flex-1 bg-lighterPink p-2 relative mb-8 md:mb-32 rounded">
                            <p>It could be a little bit prettier ... I think it&#39;s a bit simple ...</p>

                            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-lighterPink"></div>
                        </div>
                        <div className="ml-12 w-[240px] p-6 flex-1 bg-lighterPink p-2 relative rounded">
                            <p>
                                Too simple, it could be unattractive. Being very simple I felt that it did not give
                                confidence
                            </p>

                            <div className="absolute left-0 top-1/4 transform -translate-x-1/2 rotate-45 w-6 h-6 bg-lighterPink"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
