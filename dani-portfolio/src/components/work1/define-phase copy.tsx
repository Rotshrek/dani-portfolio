"use client"

import Image from "next/image"

export default function NewUserFlow({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white min-h-screen">
            <div className={gridClasses + " gap-y-4"}>
                <div className="md:col-span-6">
                    <p className="font-display text-lightPink text-2xl mb-6">New user flow</p>
                    <p className="text-lg">
                        Given all the previous research this was the design of final flow. We start by asking for the
                        license plate to auto-complete the car's data and finally ask for the data of the car's owner.
                        We eliminated questions that were not necessary to quote and grouped them by topic.
                    </p>
                </div>
                <div className="relative md:col-span-12 h-[456px]">
                    <div className="absolute w-[1280px] h-[456px] left-1/2 translate-x-[-50%]">
                        <Image src="/new-flow.svg" fill alt="New form flow" />
                    </div>
                </div>
                <div className="md:col-span-6 mt-8">
                    <p className="font-display text-lightPink text-2xl mb-6">New input system</p>
                    <p className="text-lg">
                        Together with the fronts, we decided to build a new library of inputs. These would provide
                        better feedback to the user, and aid information. They would have a status of success, tooltips,
                        loading, among others.
                    </p>
                </div>
                <div className="md:col-span-6 mt-8">
                    <Image src="/new-inputs.png" height={228} width={445} alt="New types of text inputs for forms" />
                </div>
                <div className="relative md:col-span-12 h-[403px]">
                    <div className="absolute w-[1280px] h-[403px] left-1/2 translate-x-[-50%]">
                        <Image src="/new-input-details.png" fill alt="New form flow" />
                    </div>
                </div>
                <div className="md:col-span-12 mt-8">
                    <p className="font-display text-lightPink text-2xl mb-6">Handoff to development</p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        As a team (UX and Front), this was the way we defined to facilitate the designs to development.
                        This was an iterative process in co-creation with front.
                    </p>
                </div>
                <div className="md:col-span-6">
                    <p className="text-lg">
                        We included arrows that indicated flow. This way it was easier to understand what the navigation
                        should be like, in addition, I added details in boxes so developers could find everything they
                        need to build de form in one single place.
                    </p>
                </div>
                <div className="md:col-span-12 min-h-screen">
                    <Image src="/handoff.png" height={1119} width={879} alt="Handoff to development" />
                </div>
            </div>
        </div>
    )
}
