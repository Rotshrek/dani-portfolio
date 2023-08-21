"use client"

import Image from "next/image"

export default function NewSurvey({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen bg-darkPurple">
                <div className={gridClasses}>
                    <div className="md:col-span-6">
                        <p className="font-display text-lightPink text-2xl mb-6">New survey to try illustration</p>
                        <p className="text-lg text-white mb-6">
                            With this new information we decided to give a try on illustration, a resource we used to
                            include in our communication channels. We had our doubts, for example, if it was going to
                            distract the user from the task or if it will add this little extra users where expecting.
                            It was a success.
                        </p>
                    </div>
                    <div className="md:col-span-6">
                        <p className="text-lg text-white mb-6">
                            For the survey we ask new users to use a word to describe the two proposals. One was the
                            design we previously tested and a new one including illustration.
                        </p>
                        <p className="text-lg text-white mb-6">
                            <strong>Sample: 33 users.</strong>
                        </p>
                    </div>
                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <div className="m-auto text-center text-white">
                            <div className="flex justify-between items-end">
                                <div className="flex-initial w-[180px] ml-4 p-4 flex-1 bg-blue text-gray-800 p-2 rounded relative">
                                    <p>
                                        The <strong>illustration brings it to life</strong>
                                    </p>

                                    <div className="absolute right-1/4 bottom-0 transform translate-y-1/2 rotate-45 w-4 h-4 bg-blue"></div>
                                </div>
                                <div className="flex-initial w-[220px] ml-4 p-4 flex-1 bg-blue text-gray-800 p-2 rounded relative">
                                    <p>
                                        It&#39;s like the illustration of the good{" "}
                                        <strong>vibes company and I think that inspires confidence</strong>
                                    </p>

                                    <div className="absolute left-1/4 bottom-0 transform translate-y-1/2 rotate-45 w-4 h-4 bg-blue"></div>
                                </div>
                            </div>
                            <div className="flex justify-center my-6 items-center">
                                <p className="text-7xl font-display">79%</p>
                                <p className="text-lg w-[200px] ml-4 text-left">
                                    of users prefer the layout with illustration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <Image
                            className="my-10"
                            src="/old-compara.png"
                            width={500}
                            height={300}
                            alt="Old Compara online website"
                        />
                        <Image
                            className="my-10"
                            src="/old-compara-words.svg"
                            width={500}
                            height={300}
                            alt="Words to describe old Compara online website: Boring, simple, generic, tedious"
                        />
                    </div>
                    <div className="md:col-span-6">
                        <Image
                            className="my-10"
                            src="/new-compara.png"
                            width={500}
                            height={300}
                            alt="New Compara online website"
                        />
                        <Image
                            className="my-10"
                            src="/new-compara-words.svg"
                            width={500}
                            height={300}
                            alt="Words to describe new Compara online website: Pleasant, secure, cheerful, clear"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
