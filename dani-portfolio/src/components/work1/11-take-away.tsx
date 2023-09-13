"use client"

import Image from "next/image"

export default function TakeAway({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen bg-white min-h-screen" id="take-away">
                <div className={gridClasses}>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-4xl text-center mb-6">Take Away!</p>
                        <p className="font-bold text-2xl mb-4">What did we improve?</p>
                        <ol className="text-md list-disc pl-6">
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
                        <ol className="text-md list-disc pl-6">
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
                    <div className="md:col-span-12">
                        <Image src="/compara-after.png" width={879} height={641} alt="Compara online website" />
                    </div>
                </div>
            </div>
        </div>
    )
}
