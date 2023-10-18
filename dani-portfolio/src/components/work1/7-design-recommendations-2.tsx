"use client"

import Image from "next/image"

export default function DesignRecommendation2() {
    return (
        <div className="h-auto w-full py-20 ">
            <div className="relative w-3/4 min-w-[320px] max-w-[572px] m-auto">
                <Image
                    className="absolute top-[-60px] right-[-180px] z-0"
                    src="/blue-cloud-outline.svg"
                    width={490}
                    height={190}
                    alt="blue cloud outline"
                />
                <Image
                    className="absolute bottom-[-40px] left-[-100px] z-0"
                    src="/pink-cloud.svg"
                    width={220}
                    height={100}
                    alt="pink cloud"
                />
                <div className="relative bg-[#FFF] py-12 px-8 md:px-20 rounded-lg shadow-lg">
                    <p className="font-bold text-2xl mb-4 text-center">💡 Design recommendation</p>
                    <p className="text-md mb-2">
                        <strong>Autocomplete vehicle and owner data</strong>, but not personal data.
                    </p>
                    <p className="text-md">
                        <strong>Maintain the structure</strong>: Step 1: Car details; Step 2: Owner details and Step 3:
                        Contact details.
                    </p>
                </div>
            </div>
        </div>
    )
}
