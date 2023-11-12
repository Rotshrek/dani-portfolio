"use client"

import Image from "next/image"
import { netflixRed } from "./constants"
import { NetflixTicket } from "./page"

interface Step3Props {
    setStep: (step: number) => void
}

export default function Step3({ setStep }: Step3Props) {
    return (
        <div className="max-w-[340px] h-[calc(100vh-200px)] mx-auto mt-8 flex">
            <div className="m-auto">
                <div className="px-4">
                    <Image
                        src="/eyetracking/checkmark.png"
                        width={50}
                        height={50}
                        alt="checkmark"
                        className="m-auto mb-8"
                    />
                    <p className="text-4xl text-center text-bold mb-8">Thanks!</p>
                    <div className="mb-4 flex items-center">
                        <NetflixTicket color={netflixRed} />
                        <p className="ml-4 text-lg align-middle">Thanks for doing this exercise!</p>
                    </div>
                </div>

                <button
                    className="block text-white m-auto w-full p-4 mt-8 rounded text-2xl hover:opacity-90 bg-gray"
                    onClick={() => setStep(2)}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
