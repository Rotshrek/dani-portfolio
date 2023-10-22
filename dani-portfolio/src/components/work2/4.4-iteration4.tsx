"use client"

import Image from "next/image"

export default function Iteration4() {
    return (
        <>
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-8 mb-4">
                <div className="mb-10">
                    <p className="text-md font-bold mb-2">Iteration 4</p>
                    <p className="text-md mb-6">
                        We presented iteration 3 to a professor of the Department of Marine Engineering at NTNU. The
                        professor enthusiastically endorsed the widgets, highlighting their potential to revolutionize
                        how data is accessed and utilized.
                    </p>
                    <div>
                        <div className="relative w-[577px] m-auto">
                            <div className="relative bg-[#FFF] py-12 px-8 rounded-lg shadow-lg">
                                <p className="font-bold text-2xl mb-4 text-center">
                                    💡 Insights from the interview with NTNU professor.
                                </p>
                                <p className="font-bold ml-8 mt-4">✅ Positive feedback</p>
                                <ol className="text-md list-disc px-8 ml-4">
                                    <li>He liked that widgets show the most recent history with graphs.</li>
                                    <li>He liked the Inclusion of trend data/indicators.</li>
                                    <li>He agreed that feeding is of interest to both managers and technicians.</li>
                                    <li>
                                        Including temperature and oxygen information for each fish pen is essential.
                                    </li>
                                </ol>
                                <p className="font-bold mt-6 ml-8">📌 Constructive feedback:</p>
                                <ol className="text-md list-disc px-8 ml-4">
                                    <li>
                                        Real-time sensor data is more useful than estimated data when displayed in a
                                        widget intended to create situational awareness.
                                    </li>
                                    <li>
                                        Widgets can help you decide if you need more information for a situation or if
                                        it&apos;s non-critical and will resolve on its own. Including notifications in
                                        widgets is useful.
                                    </li>
                                    <li>Density, biomass and weight is hard to estimate.</li>
                                    <li>
                                        Is crucial to include external conditions such as underwater currents, waves,
                                        and wind.
                                    </li>
                                    <li>Customization of both widget/dashboard thresholds and setup is necessary.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-md mb-6">
                        We also received feedback from two industry professionals with extensive knowledge and expertise
                        in the aquaculture industry. One is a water quality specialist, and the other is an operational
                        technician. Both interviewees have a strong understanding of the Clarify application and use it
                        regularly as part of their daily work.
                    </p>
                    <div>
                        <div className="relative w-[577px] m-auto">
                            <div className="relative bg-[#FFF] py-12 px-8 rounded-lg shadow-lg">
                                <p className="font-bold text-2xl mb-4 text-center">
                                    💡 Insights from the interview with Industry professionals and Clarify clients.
                                </p>
                                <ol className="text-md list-disc px-8 ml-4">
                                    <li>
                                        Focus on tank-specific measurements due to varying fish sizes and harvesting
                                        times.
                                    </li>
                                    <li>
                                        Prioritize density, average weight, and the number of fish in each tank; biomass
                                        is less important.
                                    </li>
                                    <li>
                                        For feeders, provide a quick overview of recent feeding, the amount of dead
                                        fish, and tank temperatures.
                                    </li>
                                    <li>Include mortality and average weight in a Level 1 widget.</li>
                                    <li>Highlight Specific Feeding Rate (SFR) over Feeding Factor (FCR).</li>
                                    <li>
                                        Display the last six hours of data in widgets for quick insights; for more
                                        in-depth info, use the app.
                                    </li>
                                    <li>Include batch numbers on the widgets.</li>
                                    <li>Allow users to arrange tanks in a custom order for efficient navigation.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <p className="text-md mb-6 mt-10">
                        With these new insights, the main changes we made are as follows:
                    </p>
                    <ol className="text-md list-disc pl-6 mb-6">
                        <li>Split environmental data into separate widgets, with a focus on oxygen and temperature.</li>
                        <li>Included oxygen in milliliters and as a percentage.</li>
                        <li>Added a progress bar to the density dataset.</li>
                        <li>Removed alerts, as they are not as useful for non-up-to-date data.</li>
                        <li>Removed mortality data and placed greater emphasis on the density of the fish pens.</li>
                        <li>Allow arrange tanks in a custom order.</li>
                        <li>Customized biology data widget for land-based aquaculture with tank and batch numbers.</li>
                        <li>Shifted focus from biomass to density and mortality.</li>
                        <li>Introduced recent history for mortality and a trend indicator.</li>
                        <li>
                            Replaced Feeding conversion ratio (FCR) with Specific feeding rate (SFR) and included a
                            trend indicator.
                        </li>
                        <li>Prioritized temperature as the primary environmental data.</li>
                    </ol>
                    <Image
                        className="m-auto"
                        src="/work2/sketches5.png"
                        width={572}
                        height={1128}
                        alt="Sketches of the fourth iteration of the app"
                    />
                </div>
            </div>
        </>
    )
}
