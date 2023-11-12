"use client"

import React, { useEffect, useMemo, useState } from "react"
import { airports } from "./airports"

interface AirportSelectorProps {
    prop: string
    label: string
    setProp: (prop: string) => void
    drawer: string | null
    setDrawer: (drawer: string | null) => void
}

export default function AirportSelector({ prop, label, setProp, drawer, setDrawer }: AirportSelectorProps) {
    const [openMenu, setOpenMenu] = useState(false),
        [inputValue, setInputValue] = useState(""),
        [searchString, setSearchString] = useState(""),
        [airportSelected, setAirportSelected] = useState(false),
        airportsFiltered = useMemo(
            () => airports.filter((airport) => airport.airport.toLowerCase().includes(searchString.toLowerCase())),
            [searchString]
        )

    const handleCloseDropDown = () => {
        setOpenMenu(false)
        if (drawer === label) setDrawer(null)
    }

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("click", handleCloseDropDown, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("click", handleCloseDropDown)
        }
    })

    useEffect(() => {
        if (drawer !== label) setOpenMenu(false)
    }, [drawer])

    const handleOpenDropDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setSearchString("")
        setOpenMenu(true)
        setDrawer(label)
    }

    const handleSelectAirport = (airport: string) => {
        setProp(airport)
        const selectedAirport = airports.find((a) => a.airportCode === airport)
        if (selectedAirport) setInputValue(`${selectedAirport.airport} (${selectedAirport.airportCode})`)
        setAirportSelected(true)
        handleCloseDropDown()
    }

    const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchString(event.currentTarget.value)
        setInputValue(event.currentTarget.value)
    }

    const resetSearch = () => {
        if (airportSelected) {
            setInputValue("")
            setSearchString("")
            setAirportSelected(false)
        }
    }

    return (
        <div className="relative w-full">
            <label
                className={`absolute z-20 ${
                    openMenu || inputValue.length > 0
                        ? "top-2 left-4 text-sm opacity-60"
                        : "top-4 left-4 text-lg opacity-100"
                }`}
            >
                {label}
            </label>
            <input
                className={`w-full h-[64px] px-4 pt-5 pb-3 border-[1px] ${
                    openMenu ? "border-[#1f8226]" : "border-[#dce2e5]"
                } relative focus:border-[#1f8226] focus:outline-none`}
                onClick={handleOpenDropDown}
                value={inputValue || ""}
                onKeyDown={resetSearch}
                onChange={handleSearch}
            />
            {openMenu && (
                <div className="absolute top-[64px] left-0 w-full h-[310px] bg-white overflow-scroll border-[1px] border-[#dce2e5] z-30">
                    {searchString.length === 0 && <div className="px-4 py-1 text-sm bg-gray">Nearest airport</div>}
                    {searchString.length === 0 && (
                        <div
                            className="px-4 py-3 bg-lightGray cursor-pointer hover:font-bold underline"
                            onClick={() => handleSelectAirport("OSL")}
                        >
                            <span>Oslo, Gardermoen (OSL+)</span>
                        </div>
                    )}
                    <div className="px-4 py-1 text-sm bg-gray">All airports</div>
                    {airportsFiltered.map((airport) => (
                        <div
                            className="px-4 py-3 hover:bg-lightGray cursor-pointer hover:font-bold hover:underline"
                            onClick={() => handleSelectAirport(airport.airportCode)}
                            key={airport.airportCode}
                        >
                            <span>
                                {airport.airport} ({airport.airportCode})
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
