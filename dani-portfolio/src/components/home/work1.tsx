"use client"

import Image from "next/image"

export default function Work1() {
    return (
        <div>
            <div className="w-screen bg-darkPurple md:h-[75vh]">
                <div className="grid md:grid-cols-12 gap-8 max-w-[1024px] h-full m-auto p-8 md:p-0 py-20">
                    <div className="md:col-span-7 m-auto">
                        <Image src={`/work1.png`} alt="cloud outline" width={543} height={294} />
                    </div>
                    <div className="md:col-span-5 text-white m-auto">
                        <p className="font-display text-4xl mb-8">Redisigning the way to quote a car insurance</p>
                        <p className="mb-8">
                            Lorem ipsum dolor sit amet consectetur. Arcu rutrum vel sed ac mauris turpis sagittis eget
                            hendrerit. Sed massa purus aliquet sapien volutpat.
                        </p>
                        <a
                            href="/work1"
                            target="_blank"
                            className="inline-block rounded-full px-4 py-2 font-bold bg-brightPink"
                        >
                            See project
                            <span className="ml-3">{">"}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
