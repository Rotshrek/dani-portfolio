"use client"

import Image from "next/image"

export default function Work1Landing({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-darkPurple min-h-screen md:h-screen md:overflow-hidden">
            <div className={gridClasses + " mt-12 md:mt-24"}>
                <div className="md:col-span-8">
                    <p className="font-display text-lightPurple text-4xl md:text-5xl mb-4">
                        Redisigning the way to quote
                    </p>
                    <p className="text-white italic text-lg">February 2021 - April 2021</p>
                </div>
                <div className="md:col-span-5">
                    <p className="text-white mb-4 mt-8 text-xl font-bold">The Challenge</p>
                    <p className="text-white text-lg">
                        Our goal was to turn the car insurance quoting form into a delightful experience through
                        user-centered design.
                    </p>
                    <p className="text-white mb-4 mt-12 text-xl font-bold">My Role</p>
                    <p className="text-white text-lg">
                        I led the project, working side by side with Business Owner Ignacio Vargas and UX/UI designer
                        Mateo Ruiz.
                    </p>
                </div>
                <div className="md:col-span-7 relative h-[300px] md:h-auto w-[300px] md:w-auto">
                    <Image
                        className="absolute bottom-0 right-[-20px]"
                        src={`/cloud.png`}
                        alt="cloud outline"
                        width={5020}
                        height={200}
                    />
                    <Image
                        className="absolute bottom-[120px] md:bottom-[80px] right-[-20px]"
                        src={`/screen.png`}
                        alt="computer screen showing the Compara website"
                        width={360}
                        height={200}
                    />
                    <Image
                        className="absolute left-0 bottom-12"
                        src={`/ipad.png`}
                        alt="ipad screen showing the Compara website"
                        width={144}
                        height={200}
                    />
                    <Image
                        className="absolute bottom-4 left-[110px]"
                        src={`/iphone.png`}
                        alt="iphone screen showing the Compara website"
                        width={82}
                        height={160}
                    />
                </div>
            </div>
        </div>
    )
}
