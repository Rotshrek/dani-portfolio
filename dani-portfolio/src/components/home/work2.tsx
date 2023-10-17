"use client"

import Image from "next/image"

export default function Work2() {
    return (
        <div>
            <div className="w-screen bg-white flex">
                <div className="max-w-[1024px] m-auto mb-20 md:p-0">
                    <div className="grid md:grid-cols-12 gap-4 bg-lightGray p-10 rounded-3xl">
                        <div className="m-auto md:hidden">
                            <Image src={`/work2.png`} alt="cloud outline" width={208} height={417} />
                        </div>
                        <div className="md:col-span-5 m-auto">
                            <p className="font-display text-4xl mb-8">
                                Improving data visualization in the salmon industry
                            </p>
                            <p className="mb-8">
                                In this academic project at NTNU, we collaborated with a Norwegian salmon company to
                                enhance essential data for making informed decisions in salmon management.
                            </p>
                            <a
                                href="/work2"
                                className="inline-block rounded-full px-5 py-4 font-bold bg-gray pointer-events-none"
                            >
                                Coming soon!
                                {/* <span className="ml-3">{">"}</span> */}
                            </a>
                        </div>
                        <div className="md:col-span-7 m-auto hidden md:block">
                            <Image src={`/work2.png`} alt="cloud outline" width={208} height={417} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
