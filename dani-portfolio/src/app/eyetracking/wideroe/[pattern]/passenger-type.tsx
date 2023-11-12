"use client"

import Image from "next/image"
import React from "react"

interface PassengerTypeProps {
    label: string
    description: string
    count: number
    changeCount: (n: number) => void
    disabled: boolean
}

export default function PassengerType({ label, description, count, changeCount, disabled }: PassengerTypeProps) {
    const disableMinus = count <= 0 || disabled,
        disablePlus = count >= 9 || disabled

    const increaseCount = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        if (count < 9) changeCount(count + 1)
    }

    const decreaseCount = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        if (count > 0) changeCount(count - 1)
    }

    return (
        <div className="w-full flex justify-between border-b-[1px] border-[#dce2e5] py-4 px-8">
            <div className="flex">
                <Image
                    className={`${disableMinus ? "opacity-40" : "cursor-pointer"}`}
                    src="/eyetracking/minus.svg"
                    width={20}
                    height={20}
                    alt="minus"
                    onClick={decreaseCount}
                />
                <div className="text-xl rounded border-[1px] border-[#dce2e5] py-2 px-2 mx-2">{count}</div>
                <Image
                    className={`${disablePlus ? "opacity-40" : "cursor-pointer"}`}
                    src="/eyetracking/plus.svg"
                    width={20}
                    height={20}
                    alt="plus"
                    onClick={increaseCount}
                />
                <div className="ml-4">
                    <p className="text-lg">{label}</p>
                    <p className="text-sm opacity-60">{description}</p>
                </div>
            </div>
        </div>
    )
}
