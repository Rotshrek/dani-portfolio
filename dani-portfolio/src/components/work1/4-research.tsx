"use client"

import Image from "next/image"

export default function Research({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen bg-white" id="research">
                <div className={gridClasses}>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8 mb-8">
                        <p className="font-bold text-4xl mb-10 text-center">Research</p>
                        <p className="font-bold text-2xl mb-6">Interviews: Call Center</p>
                        <p className="text-md">
                            I moderated one-on-one interviews with 10 executives to discover possible user pain points.
                            These were the main findings:
                        </p>
                    </div>
                    <div className="md:col-span-4 md:mt-8">
                        <Image
                            className="m-auto"
                            src="/unclear-information.svg"
                            width={276}
                            height={200}
                            alt="diagram about unclear information"
                        />
                        <p className="mt-6">
                            Users mistakenly believed that their car may be insured by a third party because the form
                            had one confusing question.
                        </p>
                    </div>
                    <div className="md:col-span-4">
                        <Image
                            className="m-auto"
                            src="/data-entry-issues.svg"
                            width={276}
                            height={200}
                            alt="diagram about data entry issues"
                        />
                        <p className="mt-6">
                            Due to the lack of clear instructions, users entered incorrect information in the “model”
                            and ”year” inputs.
                        </p>
                    </div>
                    <div className="md:col-span-4 md:mt-8">
                        <Image
                            className="m-auto"
                            src="/insurance-selection.svg"
                            width={276}
                            height={200}
                            alt="diagram about insurance slection"
                        />
                        <p className="mt-6">
                            Users seeking insurance for commercial use had a negative experience, due our lack of
                            coverage options, which was communicated at the end of the quoting process.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-white">
                <div className={gridClasses + " md:gap-y-6"}>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-2xl mb-6">Benchmark</p>
                        <p className="text-md mb-6">
                            We made an information architecture benchmark with 6 direct competitors. The objetive was to
                            find patterns to meet user expectations in quoting car insurances online.
                        </p>
                        <p className="text-md mb-6">
                            In the table below, the rows are the competitors and the colums are the questions of the
                            competitors forms (inputs).
                        </p>
                    </div>
                    <div className="relative md:col-span-12 h-[170px] md:h-[118px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                        <div className="absolute w-[1280px] md:w-full h-[170px] md:h-[118px] md:left-1/2 md:translate-x-[-50%]">
                            <Image src="/benchmark.jpg" fill alt="Benchmarking timeline" />
                        </div>
                    </div>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8 mt-6">
                        <p className="text-md mb-4">The main conclusions of this benchmark were:</p>
                        <ol className="text-md list-disc pl-6 mb-10">
                            <li>
                                Form tend to ask for the vehicle details first and then for the owner personal data.
                            </li>
                            <li>Our form has more questions than our competitors.</li>
                            <li>
                                Unlike our competitors we have the insured&#39;s data distributed in different places.
                            </li>
                        </ol>
                    </div>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-2xl mb-6">User flow first aproach</p>
                        <p className="text-md mb-6">
                            We created the journey that we thought would be ideal for the user. The objective was to use
                            this flow to create a prototype and test if our hypotheses were correct.
                        </p>
                        <p className="text-md mb-6">
                            Our mine hypothesis was that the user would want to quote through Rut (National
                            identification number), since most people know it by heart.
                        </p>
                    </div>
                    <div className="relative md:col-span-12 h-[456px] md:h-[361px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                        <div className="absolute w-[1280px] md:w-full h-[456px] md:h-[361px] md:left-1/2 md:translate-x-[-50%]">
                            <Image src="/compara-quoting-flow.png" fill alt="national identity form flow" />
                        </div>
                    </div>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-2xl mb-6">Survey</p>
                        <p className="text-md mb-6">
                            To validate the hypothesis of whether the user preferred to quote with RUT or car license
                            plate, we launched an online survey giving a fictitious scenario and asking users how they
                            preferred to quote.
                        </p>
                        <div className="mt-8 w-full h-auto min-w-[426px] min-h-[153px] relative">
                            <Image
                                src="/survey-results.svg"
                                fill
                                alt="Results of survey showing 32% prefer id and 59% prefer license plate"
                            />
                        </div>
                        <p className="text-md mt-6">
                            The sample was small, since we were more interested in the qualitative than in the
                            quantitative perspective.
                        </p>
                    </div>
                    <div className="md:col-span-5 mt-8">
                        <div className="flex items-center md:justify-center">
                            <div>
                                <Image src="/face1.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[200px] ml-4 p-6 flex-1 bg-lighterPurple text-gray-800 p-2 rounded relative">
                                    <p>I wouldn&#39;t feel safe giving my RUT if I&#39;m just quoting.</p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 mt-8">
                        <div className="flex items-center md:justify-center">
                            <div>
                                <Image src="/face2.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[240px] md:w-[400px] ml-4 p-6 flex-1 bg-lighterPurple text-gray-800 p-2 rounded relative">
                                    <p>
                                        The car&#39;s license plate is linked to the vehicle that I want to quote, and
                                        it is more related to the main action that I want to perform.
                                    </p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <p className="text-md mt-8 mb-4">The main conclusions of this survey were:</p>
                        <ol className="text-md list-disc pl-6 mb-10">
                            <li>They felt that their RUT was sensitive information to deliver at this stage. </li>
                            <li>
                                They saw a more direct relationship between the car license plate and the task of
                                quoting.
                            </li>
                            <li>
                                <strong>
                                    We believed that users would prefer using their RUT (National identification
                                    number), but they did not.
                                </strong>{" "}
                                Therefore, we had to rethink the flow.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
