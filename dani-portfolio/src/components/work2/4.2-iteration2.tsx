"use client"

import Image from "next/image"

export default function Iteration2() {
    return (
        <>
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-8 mb-4">
                <div className="mb-10">
                    <p className="text-md font-bold mb-2">Iteration 2</p>
                    <p className="text-md mb-6">
                        We presented iteration 1 to Runar and new insight lead us to Iteration Nº2.
                    </p>
                    <div>
                        <div className="relative w-[577px] m-auto">
                            <div className="relative bg-[#FFF] py-12 px-8 rounded-lg shadow-lg">
                                <p className="font-bold text-2xl mb-4 text-center">
                                    💡 Insights from the interview with Runar
                                </p>
                                <ol className="text-md list-disc px-8 ml-4">
                                    <li>
                                        Not all facilities have automated sensors that are updated throughout the day.
                                        In most cases, it is registered manually.
                                    </li>
                                    <li>
                                        Other findings suggested that including symbols that indicated a trend in the
                                        datasets could be helpful.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <p className="text-md mb-6">
                        As suggested by insights from the second interview, not all the information is updated in
                        real-time, so we added timestamps to indicate the last update for the user. In addition, we
                        decided to keep the symbols that indicated a trend in the datasets
                    </p>
                    <Image
                        className="m-auto"
                        src="/work2/sketches3.png"
                        width={612}
                        height={881}
                        alt="Sketches of the second iteration of the app"
                    />
                </div>
            </div>
        </>
    )
}
