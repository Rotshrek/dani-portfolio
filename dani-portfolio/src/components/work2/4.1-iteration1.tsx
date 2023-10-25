"use client"

import Image from "next/image"

export default function Iteration1() {
    return (
        <>
            <div className="md:col-span-2 hidden md:block" />
            <div className="md:col-span-8 mb-4">
                <p className="font-bold text-2xl mb-2">Interviews</p>
                <p className="text-md mb-6">
                    Throughout the project, we conducted 9 interviews with various stakeholders to gather information
                    and obtain feedback. Three interviews were with Clarify, our client, five were with industry users
                    and specialists, and one was with a marine engineering professor.
                </p>
                <div className="mb-10">
                    <p className="text-md font-bold mb-2">First drafts</p>
                    <p className="text-md mb-6">
                        After the first interview with our client Clarify, we gained several insights that guided the
                        creation of our first sketches. One of the key findings was that the solution&apos;s primary
                        purpose isn&apos;t to read real-time datasets; instead, it&apos;s focused on supporting
                        decision-making and predictions in fish farms.
                    </p>
                    <Image
                        className="m-auto"
                        src="/work2/sketches1.png"
                        width={631}
                        height={667}
                        alt="Sketches of the first draft of the app"
                    />
                </div>
                <div className="mb-10">
                    <p className="text-md font-bold mb-2">Interview with Runar</p>
                    <p className="text-md mb-6">
                        Runar has worked as both an operations technician and an operations manager at a large sea-based
                        fish farming facility for over 25 years. While the company he works for is not a client of
                        Clarify, his expertise in the field has enabled us to gain further knowledge of the users&apos;
                        needs.
                    </p>
                    <div>
                        <div className="relative w-3/4 min-w-[320px] max-w-[577px] m-auto">
                            <div className="relative bg-[#FFF] py-12 px-4 md:px-8 rounded-lg shadow-lg">
                                <p className="font-bold text-2xl mb-4 text-center">
                                    💡 Insights from the interview with Runar
                                </p>
                                <ol className="text-md list-disc px-2 md:px-8 ml-4">
                                    <li>
                                        It is important for users to be able to choose the data that suits their role.
                                    </li>
                                    <li>It is essential to be able to input the normal values for each facility.</li>
                                    <li>
                                        Operations technicians must complete numerous registrations at fixed times each
                                        day.
                                    </li>
                                    <li>
                                        For daily operations is vital to have a quick access to environmental data,
                                        history, and biomass.
                                    </li>
                                    <li>
                                        An app should include features such as environmental data, an overview of fish
                                        cages with the number of fish, size, and biomass.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-md font-bold mb-2">Iteration 1</p>
                    <p className="text-md mb-6">
                        Following the interview with Runar, we refined the initial drafts and developed the first
                        environmental data-widgets. Given that Runar worked at a sea-based facility, all fish pens were
                        connected to the same sensors, eliminating the need to switch between fish pens when reviewing
                        environmental data. Considering the importance of historical information in understanding how
                        the facility is doing, we experimented with various graph and table styles to effectively
                        represent these data sets.
                    </p>
                    <Image
                        className="m-auto"
                        src="/work2/sketches2.png"
                        width={579}
                        height={833}
                        alt="Sketches of the first iteration of the app"
                    />
                </div>
            </div>
        </>
    )
}
