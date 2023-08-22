"use client"

import Image from "next/image"

export default function Work3() {
    return (
        <div>
            <div className="w-screen bg-purple h-[75vh]">
                <div className="grid md:grid-cols-12 gap-8 max-w-[1024px] h-full m-auto py-20">
                    <div className="md:col-span-7 m-auto">
                        <Image src={`/work3.png`} alt="cloud outline" width={551} height={312} />
                    </div>
                    <div className="md:col-span-5 text-white m-auto">
                        <p className="font-display text-4xl mb-4">Building a user account for car insurance clients</p>
                        <p className="mb-4 font-bold">Coming soon!</p>
                        <p className="mb-8">
                            For this project, we designed the user account section from the ground up. As a result,
                            users now enjoy greater autonomy and the ability to self-manage effectively, reducing the
                            load on the call center.
                        </p>
                        {/* <a
                            href="/work3"
                            target="_blank"
                            className="inline-block rounded-full px-4 py-2 font-bold bg-brightPink"
                        >
                            See project
                            <span className="ml-3">{">"}</span>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
