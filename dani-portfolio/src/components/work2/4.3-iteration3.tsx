"use client"

import Image from "next/image"

export default function Iteration3() {
    return (
        <>
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-8 mb-4">
                <div className="mb-10">
                    <p className="text-md font-bold mb-2">Iteration 3</p>
                    <p className="text-md mb-6">
                        We presented iteration 2 to Runar and his boss. The interaction between them gave us new
                        insights lead us to Iteration Nº3.
                    </p>
                    <div>
                        <div className="relative w-[577px] m-auto">
                            <div className="relative bg-[#FFF] py-12 px-8 rounded-lg shadow-lg">
                                <p className="font-bold text-2xl mb-4 text-center">
                                    💡 Insights from the interview with Runar and his boss
                                </p>
                                <ol className="text-md list-disc px-8 ml-4">
                                    <li>
                                        Oxygen and temperature significantly impact fish welfare, making them equally
                                        important factors to monitor.
                                    </li>
                                    <li>
                                        They expressed a preference for displaying oxygen levels in both percentage and
                                        millimetres.
                                    </li>
                                    <li>
                                        It will be helpful to view recent oxygen and temperature history for the past
                                        few hours.
                                    </li>
                                    <li>
                                        The most crucial biological data measurement is density, as it&apos;s illegal to
                                        have more than 25 kg of fish per cubic meter in the fish pens.
                                    </li>
                                    <li>Having feeding information within a widget is valuable.</li>
                                    <li>
                                        Real-time measurements are not critical. Receiving updates every 30 minutes or
                                        every hour is sufficient.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-md mb-6">With this new insight we decided to:</p>
                    <ol className="text-md list-disc pl-6 mb-10">
                        <li>
                            Consolidate the most critical environmental data into a single widget and create two
                            additional widgets for biomass and feeding.
                        </li>
                        <li>Focus on the biomass and feeding datasets.</li>
                        <li>
                            Experiment with various measuring units and visualization methods for the dataset history.
                        </li>
                    </ol>
                    <Image
                        className="m-auto"
                        src="/work2/sketches4.png"
                        width={684}
                        height={1474}
                        alt="Sketches of the third iteration of the app"
                    />
                </div>
            </div>
        </>
    )
}
