"use client"

import Image from "next/image"

export default function Work1Landing({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-darkPurple min-h-screen md:h-screen md:overflow-hidden" id="landing">
            <div className={gridClasses + " mt-12"}>
                <div className="md:col-span-8">
                    <p className="font-display text-green text-3xl md:text-5xl mb-4">
                        Information visualization for the salmon industry
                    </p>
                    <p className="text-white italic">March 2023 - April 2023</p>
                </div>
                <div className="md:col-span-5 mb-12 md:mb-0">
                    <p className="text-white mb-2 mt-8 md:mt-4 text-lg font-bold">The Challenge</p>
                    <p className="text-white">
                        Our goal was to design a concept for a mobile app that provides situational awareness by
                        displaying data on tank parameters and fish health.
                    </p>
                    <p className="text-white mb-2 mt-12 text-lg font-bold">My Role</p>
                    <p className="text-white">
                        I was a team member. This was an academic project for the master's program in interaction design
                        at NTNU. I worked side by side with three other designers. The client was Clarify.
                    </p>
                </div>
                <div className="md:col-span-7 relative h-[300px] md:h-auto w-[300px] md:w-auto">
                    <Image
                        className="absolute bottom-[20px] md:bottom-[40px] left-[110px]"
                        src={`/work2/fish.svg`}
                        alt="fish vector"
                        width={63}
                        height={26}
                    />
                    <Image
                        className="absolute bottom-[20px] md:bottom-[40px] left-[110px]"
                        src={`/work2/fish.svg`}
                        alt="fish vector"
                        width={117}
                        height={48}
                    />
                    <Image
                        className="absolute -top-[20px] md:top-[-40px] left-0 md:left-[40px]"
                        src={`/work2/Biomass.svg`}
                        alt="Fish weight and mortality indicators"
                        width={120}
                        height={120}
                    />
                    <Image
                        className="absolute top-[20px] md:top-[-20px] right-0"
                        src={`/work2/Feeding.svg`}
                        alt="Fish feeding rate graph"
                        width={252}
                        height={119}
                    />
                    <Image
                        className="absolute left-[20px] md:left-[80px] bottom-0 md:bottom-[-60px]"
                        src={`/work2/Temperature.svg`}
                        alt="Sea temperature indicators"
                        width={252}
                        height={265}
                    />
                </div>
            </div>
        </div>
    )
}
