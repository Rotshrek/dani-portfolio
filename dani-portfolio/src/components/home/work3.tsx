"use client"

import Image from "next/image"

export default function Work3() {
    return (
        <div>
            <div className="w-screen bg-white flex">
                <div className="max-w-[1024px] m-auto mb-20 md:p-0">
                    <div className="grid md:grid-cols-12 gap-4 bg-lightGray p-10 rounded-3xl">
                        <div className="md:col-span-7 m-auto">
                            <Image src={`/work3.png`} alt="cloud outline" width={551} height={312} />
                        </div>
                        <div className="md:col-span-5 m-auto">
                            <p className="font-display text-4xl mb-8">
                                Building a user account for car insurance clients
                            </p>
                            <p className="mb-8">
                                For this project, we designed the user account section from the ground up. As a result,
                                users now enjoy greater autonomy and the ability to self-manage effectively, reducing
                                the load on the call center.
                            </p>
                            <a
                                href="/work2"
                                className="inline-block rounded-full px-5 py-4 font-bold bg-gray pointer-events-none"
                            >
                                Coming soon!
                                {/* <span className="ml-3">{">"}</span> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
