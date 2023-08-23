"use client"

import Image from "next/image"

export default function Work1Landing({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-darkPurple min-h-screen md:h-screen">
            <div className={gridClasses + " mt-12 md:mt-36 gap-12"}>
                <div className="md:col-span-6">
                    <p className="font-display text-lightPurple text-4xl md:text-6xl mb-8">
                        Redisigning the way to quote
                    </p>
                    <p className="text-white mb-2">
                        Client: <a href="https://www.compara.cl">Compara.cl</a>
                    </p>
                    <p className="text-white">February 2021 - April 2021</p>
                </div>
                <div className="md:col-span-6 relative h-[300px] md:h-auto w-[300px] md:w-auto">
                    <Image
                        className="absolute bottom-0 left-0 md:left-[-100px]"
                        src={`/cloud.png`}
                        alt="cloud outline"
                        width={500}
                        height={200}
                    />
                    <Image
                        className="absolute bottom-[120px] md:bottom-[80px] right-[-80px] md:right-[-100px]"
                        src={`/screen.png`}
                        alt="computer screen showing the Compara website"
                        width={400}
                        height={300}
                    />
                    <Image
                        className="absolute left-0 md:left-[-40px] bottom-12 w-[140px] md:w-[180px]"
                        src={`/ipad.png`}
                        alt="ipad screen showing the Compara website"
                        width={180}
                        height={250}
                    />
                    <Image
                        className="absolute bottom-4 left-[120px] md:left-[100px]"
                        src={`/iphone.png`}
                        alt="iphone screen showing the Compara website"
                        width={100}
                        height={200}
                    />
                </div>
                <div className="md:col-span-6">
                    <p className="font-display text-lightPink mb-4 text-xl">The Challenge</p>
                    <p className="text-white text-xl">
                        Our goal was to{" "}
                        <strong>turn the car insurance quoting form into a delightful experience</strong> through
                        user-centered design.
                    </p>
                </div>
                <div className="md:col-span-6">
                    <p className="font-display text-lightPink mb-4 text-xl">My Role</p>
                    <p className="text-white text-xl">
                        <strong>I led the project,</strong> working side by side with Business Owner Ignacio Vargas and
                        UX/UI designer Mateo Ruiz.
                    </p>
                </div>
            </div>
        </div>
    )
}
