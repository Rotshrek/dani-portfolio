"use client"

import Image from "next/image"

export default function DesignRecommendation() {
    return (
        <div className="h-auto w-full py-20 ">
            <div className="relative w-3/4 min-w-[320px] max-w-[572px] m-auto">
                <Image
                    className="absolute top-[-40px] left-[-140px] z-0"
                    src="/pink-cloud-outline.svg"
                    width={220}
                    height={100}
                    alt="pink cloud outline"
                />
                <Image
                    className="absolute bottom-[-40px] right-[-180px] z-0"
                    src="/blue-cloud.svg"
                    width={490}
                    height={190}
                    alt="blue cloud"
                />
                <div className="relative bg-[#FFF] py-12 px-8 md:px-20 rounded-lg shadow-lg">
                    <p className="font-bold text-2xl mb-4 text-center">💡 Design recommendation</p>
                    <p className="text-md mb-2">
                        The <strong>car license plate should be the first question in the form.</strong>
                    </p>
                    <p className="text-md mb-2">
                        We can use our database for autocomplete car information related inputs.
                    </p>
                    <p className="text-md mb-2">
                        Also <strong>give the option to quote without a license plate</strong> for those users who
                        prefer it.
                    </p>
                </div>
            </div>
        </div>
    )
}
