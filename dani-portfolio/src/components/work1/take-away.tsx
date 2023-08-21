"use client"

import Image from "next/image"

export default function TakeAway({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen bg-darkPurple min-h-screen">
                <div className={gridClasses}>
                    <div className="md:col-span-12 text-center">
                        <p className="font-display text-lightPurple text-6xl mb-8">Take Away!</p>
                        <p className="font-display text-white text-xl mb-8">What did we improve?</p>
                    </div>
                    <div className="md:col-span-6">
                        <ol className="text-lg text-white list-disc pl-6">
                            <li>
                                We used a database to autocomplete car data, leaving the personal info to be completed.
                            </li>
                            <li>We decreased the number of clicks.</li>
                            <li>We decreased the number of questions.</li>
                            <li>We improved the information architecture (we grouped related questions into steps).</li>
                            <li>
                                We improved the experience for commercial use cars (now we notify the user if there are
                                no insurance plans for their vehicle from step 1).
                            </li>
                            <li>We included an illustration to enhance the viewing experience.</li>
                            <li>
                                We included information that the user was missing (explaining why the car model may be
                                missing and that its data must match those of the registry).
                            </li>
                            <li>We improved the feedback the system gives to the user (more states for inputs).</li>
                        </ol>
                    </div>
                    <div className="md:col-span-6">
                        <ol className="text-lg text-white list-disc pl-6">
                            <li>
                                We improved the alert and information system for the user: showing information that the
                                they might know when they click on an entry instead of showing it all at once.
                            </li>
                            <li>
                                We added tooltips for those questions that are more complex and the user may need help
                                with.
                            </li>
                            <li>We improved the form&#39;s context by including breadcrumbs.</li>
                            <li>We informed better where the user is by including a stepper with clear labels.</li>
                            <li>
                                We unified the voice and tone of the UX writing to through the form, from titles to
                                questions.
                            </li>
                        </ol>
                    </div>
                    <div className="md:col-span-5" />
                    <div className="md:col-span-7">
                        <Image src="/compara-before.png" width={550} height={370} alt="Compara online website" />
                        <p className="text-white mt-4 text-right text-xl">Before</p>
                    </div>
                    <div className="md:col-span-7">
                        <Image src="/compara-after.png" width={550} height={370} alt="Compara online website" />
                        <p className="text-white text-right text-xl">After</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
