"use client"

import Image from "next/image"

export default function NewSurvey({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen" id="iteration">
                <div className={gridClasses}>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-3xl text-center mb-6">Iteration</p>
                        <p className="font-bold text-2xl mb-6">New Survey</p>
                        <p className="text-md  md:mb-6">
                            With this new information we decided to give a try on illustration, a resource we used to
                            include in our communication channels. We had our doubts, for example, if it was going to
                            distract the user from the task or if it will add this little extra users where expecting.
                            It was a success.
                        </p>
                        <p className="text-md  md:mb-6">
                            For the survey we ask new users to use a word to describe the two proposals. One was the
                            design we previously tested and a new one including illustration.
                        </p>
                        <p className="text-md  md:mb-6">
                            <strong>Sample: 33 users.</strong>
                        </p>
                    </div>
                    <div className="hidden md:block md:col-span-2" />
                    <div className="hidden md:block md:col-span-1" />
                    <div className="hidden md:block md:col-span-10">
                        <div className="m-auto text-center ">
                            <div className="flex justify-between items-center">
                                <div className="flex-initial w-[220px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>The illustration brings it to life</p>

                                    <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple" />
                                </div>
                                <div className="text-center">
                                    <p className="text-7xl font-display">79%</p>
                                    <p className="text-md">of users prefer the layout with illustration.</p>
                                </div>
                                <div className="flex-initial w-[220px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>
                                        It&#39;s like the illustration of the good vibes company and I think that
                                        inspires confidence
                                    </p>

                                    <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="m-auto text-center ">
                            <div className="flex justify-between items-end">
                                <div className="flex-initial w-[140px] p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>The illustration brings it to life</p>

                                    <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 rotate-45 w-4 h-4 bg-lighterPurple" />
                                </div>
                                <div className="flex-initial w-[170px] ml-2 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>
                                        It&#39;s like the illustration of the good vibes company and I think that
                                        inspires confidence
                                    </p>

                                    <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 rotate-45 w-4 h-4 bg-lighterPurple" />
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-7xl font-display">79%</p>
                                <p className="text-md">of users prefer the layout with illustration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <Image
                            className="md:my-10 rounded-lg"
                            src="/work1/old-flow-survey.svg"
                            width={500}
                            height={533}
                            alt="Old Compara online website and words to describe it: Boring, simple, generic, mistrust"
                        />
                    </div>
                    <div className="md:col-span-6">
                        <Image
                            className="md:my-10 rounded-lg"
                            src="/work1/new-flow-survey.svg"
                            width={500}
                            height={533}
                            alt="New Compara online website and words to describe it: Pleasant, secure, cheerful, clear"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
