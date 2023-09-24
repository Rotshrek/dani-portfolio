"use client"

import Image from "next/image"

export default function Work2() {
    return (
        <div>
            <div className="w-screen bg-darkBlue md:h-[75vh]">
                <div className="grid md:grid-cols-12 gap-8 max-w-[1024px] h-full m-auto p-8 md:p-0 py-20">
                    <div className="m-auto md:hidden">
                        <Image src={`/work2.png`} alt="cloud outline" width={208} height={417} />
                    </div>
                    <div className="md:col-span-5 text-white m-auto">
                        <p className="font-display text-3xl mb-4">
                            Improving data visualization in the salmon industry
                        </p>
                        <p className="mb-4 font-bold">Coming soon!</p>
                        <p className="mb-8">
                            In this academic project at NTNU, we collaborated with a Norwegian salmon company to enhance
                            essential data for making informed decisions in salmon management.
                        </p>
                        {/* <a
                            href="/work2"
                            target="_blank"
                            className="inline-block rounded-full px-4 py-2 font-bold bg-brightPink"
                        >
                            See project
                            <span className="ml-3">{">"}</span>
                        </a> */}
                    </div>
                    <div className="md:col-span-7 m-auto hidden md:block">
                        <Image src={`/work2.png`} alt="cloud outline" width={208} height={417} />
                    </div>
                </div>
            </div>
        </div>
    )
}
