"use client"

import Image from "next/image"

export default function Work1() {
    return (
        <div>
            <div className="w-screen bg-white flex">
                <div className="max-w-[1024px] m-auto my-20 md:p-0">
                    <p className="text-4xl mb-10 text-center font-bold">My Work</p>
                    <div className="grid md:grid-cols-12 gap-4 bg-lightGray p-10 rounded-3xl">
                        <div className="md:col-span-7 m-auto">
                            <Image src={`/work1.png`} alt="screens showing first work" width={414} height={316} />
                        </div>
                        <div className="md:col-span-5 m-auto">
                            <p className="font-display text-4xl mb-8">Redisigning the way to quote a car insurance</p>
                            <p className="mb-8">
                                In the journey of this project, we created Figma prototypes, tested them with real
                                users, and iterated, always keeping the user at the center of the design process. We
                                stumbled upon an unexpected revelation that guided the redesign.
                            </p>
                            <a
                                href="/work1"
                                className="inline-block rounded-full px-5 py-4 font-bold bg-brightPink text-white"
                            >
                                See project
                                <span className="ml-3">{">"}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
