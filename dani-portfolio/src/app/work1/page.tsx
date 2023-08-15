"use client"

import Image from "next/image"

const grid = "grid grid-cols-12 gap-12 max-w-[968px] h-screen m-auto pt-36 pb-20"

export default function Work1() {
    return (
        <main>
            <div className="w-screen bg-purple h-screen">
                <div className={grid}>
                    <div className="col-span-6">
                        <p className="font-display text-lightPurple text-6xl mb-8">Redisigning the way to quote</p>
                        <p className="text-white mb-2">
                            Client: <a href="https://www.compara.cl">Compara.cl</a>
                        </p>
                        <p className="text-white">February 2021 - April 2021</p>
                    </div>
                    <div className="col-span-6 relative">
                        <Image
                            className="absolute bottom-0 left-[-100px]"
                            src={`/cloud.png`}
                            alt="cloud outline"
                            width={500}
                            height={200}
                        />
                        <Image
                            className="absolute top-0 right-[-100px]"
                            src={`/screen.png`}
                            alt="computer screen showing the Compara website"
                            width={400}
                            height={300}
                        />
                        <Image
                            className="absolute left-[-40px] bottom-12"
                            src={`/ipad.png`}
                            alt="ipad screen showing the Compara website"
                            width={180}
                            height={250}
                        />
                        <Image
                            className="absolute bottom-4 left-[100px]"
                            src={`/iphone.png`}
                            alt="iphone screen showing the Compara website"
                            width={100}
                            height={200}
                        />
                    </div>
                    <div className="col-span-6">
                        <p className="font-display text-lightPink mb-4 text-xl">The Challenge</p>
                        <p className="text-white text-xl">
                            Our goal was to{" "}
                            <strong>turn the car insurance quoting form into a delightful experience</strong> through
                            user-centered design.
                        </p>
                    </div>
                    <div className="col-span-6">
                        <p className="font-display text-lightPink mb-4 text-xl">My Role</p>
                        <p className="text-white text-xl">
                            <strong>I led the project,</strong> working side by side with Business Owner Ignacio Vargas
                            and UX/UI designer Mateo Ruiz.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-white h-screen">
                <div className={grid}></div>
            </div>
        </main>
    )
}
