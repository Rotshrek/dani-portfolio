"use client"

import { gridClasses } from "@/app/work1/page"
import Image from "next/image"

export default function DefinePhase() {
    return (
        <div className="w-screen bg-white min-h-screen">
            <div className={gridClasses + " gap-y-4"}>
                <div className="md:col-span-12">
                    <p className="font-display text-6xl mb-8 text-center">Define phase</p>
                    <p className="font-display text-lightPink text-2xl">User flow first approach</p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        We <strong>created the journey that we thought would be ideal for the user.</strong> The
                        objective was to use this flow to create a prototype and test if our hypotheses were correct.
                    </p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        Our mine hypothesis was that the{" "}
                        <strong>user would want to quote through Rut (National identification number)</strong>, since
                        most people know it by heart.
                    </p>
                </div>
                <div className="relative md:col-span-12 h-[456px]">
                    <div className="absolute w-[1280px] h-[456px] left-1/2 translate-x-[-50%]">
                        <Image src="/compara-flow.png" fill alt="national identity form flow" />
                    </div>
                </div>
            </div>
            <div className={gridClasses + " gap-y-4"}>
                <div className="md:col-span-12">
                    <p className="font-display text-lightPink text-2xl">Survey</p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        To validate the hypothesis of whether the user preferred to quote with RUT or car license plate,
                        we launched an online survey giving a fictitious scenario and asking users how they preferred to
                        quote.
                    </p>
                    <p className="text-lg mt-4">
                        <strong>
                            The results surprised us: We believed that users would prefer using their RUT (National
                            identification number), but they did not.
                        </strong>{" "}
                        Therefore, we had to rethink the flow.
                    </p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        The sample was small, since we were more interested in the qualitative than in the quantitative
                        perspective.
                    </p>
                    <div className="mt-8 w-full h-auto min-w-[426px] min-h-[113px] relative">
                        <Image
                            src="/survey-results.svg"
                            fill
                            alt="Results of survey showing 32% prefer id and 59% prefer license plate"
                        />
                    </div>
                </div>
                <div className="md:col-span-6 mt-8">
                    <p className="text-lg mb-6">
                        They felt that their RUT was sensitive information to deliver at this stage.
                    </p>
                    <div className="flex items-center justify-center">
                        <div>
                            <Image src="/face1.png" width={66} height={66} alt="face of a participant" />
                        </div>

                        <div>
                            <div className="w-[200px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                <p>I wouldn&#39;t feel safe giving my RUT if I&#39;m just quoting.</p>

                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-6 mt-8">
                    <p className="text-lg mb-6">
                        They saw a more direct relationship between the car license plate and the task of quoting.
                    </p>
                    <div className="flex items-center justify-center">
                        <div>
                            <Image src="/face2.png" width={66} height={66} alt="face of a participant" />
                        </div>

                        <div>
                            <div className="w-[400px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                <p>
                                    The car’s license plate is linked to the vehicle that I want to quote, and it is
                                    more related to the main action that I want to perform.
                                </p>

                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
