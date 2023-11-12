"use client"

import React, { useEffect, useMemo, useState } from "react"
import { Passengers } from "./page"
import PassengerType from "./passenger-type"

interface PassengerSelectorProps {
    passengers: Passengers
    setPassengers: (passengers: Passengers) => void
    drawer: string | null
    setDrawer: (drawer: string | null) => void
}

export default function PassengerSelector({ passengers, setPassengers, drawer, setDrawer }: PassengerSelectorProps) {
    const [openMenu, setOpenMenu] = useState(false),
        passengerCount = useMemo(() => Object.values(passengers).reduce((a, b) => a + b.count, 0), [passengers])

    const handleCloseDrawer = () => {
        setOpenMenu(false)
        if (drawer === "passengers") setDrawer(null)
    }

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("click", handleCloseDrawer, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("click", handleCloseDrawer)
        }
    })

    useEffect(() => {
        if (drawer !== "passengers") setOpenMenu(false)
    }, [drawer])

    const handleOpenDropDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setOpenMenu(!openMenu)
        if (!openMenu) setDrawer("passengers")
        else setDrawer(null)
    }

    return (
        <div
            className={`w-full inline-block h-[64px] p-4 border-[1px] cursor-pointer ${
                openMenu ? "border-[#1f8226]" : "border-[#dce2e5]"
            }`}
            onClick={handleOpenDropDown}
        >
            <div className="h-[34px] overflow-hidden">
                <label
                    className={`cursor-pointer relative z-20 ${
                        passengerCount > 0 ? "-top-2 left-0 text-sm opacity-60" : "top-0 left-0 text-lg opacity-100"
                    }`}
                >
                    Passengers
                </label>
                {passengerCount > 0 && (
                    <p className="relative -top-4">
                        {Object.keys(passengers)
                            .map((passengerType) => {
                                const count = passengers[passengerType as keyof Passengers].count
                                if (count > 0) return `${count} ${passengerType}`
                            })
                            .filter((p) => p)
                            .join(", ")}
                    </p>
                )}
            </div>
            {openMenu && (
                <div className="cursor-default absolute top-0 right-[-410px] w-[414px] h-full bg-white overflow-scroll border-[1px] border-[#dce2e5] z-30 shadow-lg">
                    <div className="w-full flex justify-between border-b-[1px] border-[#dce2e5] pt-7 pb-4 px-8">
                        <p className="text-2xl">Passengers</p>
                        <svg
                            className="inline-block align-middle rotate-45 cursor-pointer"
                            width="30"
                            height="30"
                            viewBox="0 0 20 20"
                            onClick={handleCloseDrawer}
                        >
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(-645.000000, -719.000000) translate(581.000000, 133.000000) translate(40.000000, 134.000000) translate(24.000000, 452.000000)">
                                    <circle cx="10" cy="10" r="9.5" fill="#F5FAF5" stroke="#369E3B"></circle>
                                    <rect width="10" height="1" x="5" y="9.5" fill="#369E3B" rx=".5"></rect>
                                    <rect width="1" height="10" x="9.5" y="5" fill="#369E3B" rx=".5"></rect>
                                </g>
                            </g>
                        </svg>
                    </div>
                    {Object.keys(passengers).map((passengerType) => {
                        return (
                            <PassengerType
                                key={passengerType}
                                label={passengers[passengerType as keyof Passengers].type}
                                description={passengers[passengerType as keyof Passengers].description}
                                count={passengers[passengerType as keyof Passengers].count}
                                changeCount={(n) =>
                                    setPassengers({
                                        ...passengers,
                                        [passengerType]: { ...passengers[passengerType as keyof Passengers], count: n },
                                    })
                                }
                                disabled={false}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
