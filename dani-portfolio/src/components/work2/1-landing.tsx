"use client"

import Image from "next/image"
import { CSSProperties } from "react"

export default function Work1Landing({ gridClasses }: { gridClasses: string }) {
    const windowWidth = typeof window !== "undefined" ? window?.innerWidth : 880,
        windowHeight = typeof window !== "undefined" ? window?.innerHeight : 620,
        widthMultiplier = Math.ceil(windowWidth / 280),
        heightMultiplier = Math.ceil(windowHeight / 180),
        fishPath1 = `M${-10 * widthMultiplier} ${80 * heightMultiplier} Q ${120 * widthMultiplier} ${
            10 * heightMultiplier
        }, ${280 * widthMultiplier} ${80 * heightMultiplier} T ${460 * widthMultiplier} ${80 * heightMultiplier}`,
        fishPath2 = `M${-15 * widthMultiplier} ${100 * heightMultiplier} Q ${120 * widthMultiplier} ${
            140 * heightMultiplier
        }, ${280 * widthMultiplier} ${120 * heightMultiplier} T ${460 * widthMultiplier} ${160 * heightMultiplier}`,
        fishPath3 = `M${-10 * widthMultiplier} ${60 * heightMultiplier} Q ${120 * widthMultiplier} ${
            240 * heightMultiplier
        }, ${280 * widthMultiplier} ${80 * heightMultiplier} T ${460 * widthMultiplier} ${200 * heightMultiplier}`

    return (
        <div className="w-screen bg-darkPurple min-h-screen md:h-screen md:overflow-hidden" id="landing">
            <div className="absolute w-screen h-screen top-0 left-0">
                <Image
                    id="fish1"
                    className="opacity-70 animate-[moveOnPath_15s_3s_linear_infinite]"
                    src={`/work2/fish.svg`}
                    alt="fish vector"
                    width={52}
                    height={20}
                    style={
                        {
                            "offset-path": `path("${fishPath1}")`,
                        } as CSSProperties
                    }
                />
                <Image
                    id="fish2"
                    className="opacity-20 animate-[moveOnPath_18s_linear_infinite]"
                    src={`/work2/fish.svg`}
                    alt="fish vector"
                    width={117}
                    height={48}
                    style={
                        {
                            "offset-path": `path("${fishPath2}")`,
                        } as CSSProperties
                    }
                />
                <Image
                    id="fish3"
                    className="opacity-40 animate-[moveOnPath_16s_500ms_linear_infinite]"
                    src={`/work2/fish.svg`}
                    alt="fish vector"
                    width={63}
                    height={26}
                    style={
                        {
                            "offset-path": `path("${fishPath3}")`,
                        } as CSSProperties
                    }
                />
            </div>
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
                        I was a team member. This was an academic project for the master&apos;s program in interaction
                        design at NTNU. I worked side by side with three other designers. The client was Clarify.
                    </p>
                </div>
                <div className="md:col-span-7 relative">
                    <Image
                        className="md:absolute m-auto md:top-[-40px] md:left-[40px]"
                        src={`/work2/Biomass.svg`}
                        alt="Fish weight and mortality indicators"
                        width={120}
                        height={120}
                    />
                    <Image
                        className="md:absolute m-auto md:top-[-20px] md:right-0"
                        src={`/work2/Feeding.svg`}
                        alt="Fish feeding rate graph"
                        width={252}
                        height={119}
                    />
                    <Image
                        className="md:absolute m-auto md:left-[80px] md:bottom-[-60px]"
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
