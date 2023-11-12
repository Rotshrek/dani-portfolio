"use client"

import Image from "next/image"
import { netflixRed } from "./constants"
import { NetflixTicket } from "./page"

interface Step1Props {
    setStep: (step: number) => void
}

export default function Step1({ setStep }: Step1Props) {
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
                    <p className="text-4xl text-center text-bold mb-8">Choose your plan.</p>
                    <div className="mb-4 flex items-center">
                        <NetflixTicket color={netflixRed} />
                        <p className="ml-4 text-lg align-middle">No commitments, cancel at any time.</p>
                    </div>
                    <div className="mb-4 flex items-center">
                        <NetflixTicket color={netflixRed} />
                        <p className="ml-4 text-lg align-middle">Everything on Netflix for one low price.</p>
                    </div>
                    <div className="mb-4 flex item-center">
                        <NetflixTicket color={netflixRed} />
                        <p className="ml-4 text-lg align-middle">Unlimited viewing on all your devices.</p>
                    </div>
                </div>

                <button
                    className="block text-white m-auto w-full p-4 mt-8 rounded text-2xl hover:opacity-90"
                    style={{ backgroundColor: netflixRed }}
                    onClick={() => setStep(2)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
