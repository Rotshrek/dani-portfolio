"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import AirportSelector from "./airport-dropdown"
import DateSelector from "./date-selector"
import PassengerSelector from "./passenger-selector"

export interface Passenger {
    type: string
    count: number
    description: string
}

export interface Passengers {
    adults: Passenger
    children: Passenger
    infants: Passenger
    youth: Passenger
    elderly: Passenger
    students: Passenger
}

export interface FlyDate {
    day: number
    month: number
    year: number
    userSet?: boolean
}

const textSelected = " border-b-4 border-b-[#1f8226] text-[#1f8226]"

export default function Wideroe() {
    const [travelType, setTravelType] = useState<"roundtrip" | "oneway">("roundtrip"),
        params = useParams(),
        [flyFrom, setFlyFrom] = useState(""),
        [flyTo, setFlyTo] = useState(""),
        [step, setStep] = useState(1),
        [departureDate, setDepartureDate] = useState<FlyDate>({
            day: 17,
            month: 11,
            year: 2023,
        }),
        [returnDate, setReturnDate] = useState<FlyDate>({
            day: 21,
            month: 11,
            year: 2023,
        }),
        [passengers, setPassengers] = useState<Passengers>({
            adults: { type: "Adults", count: params?.pattern === "dark" ? 1 : 0, description: "12 years or older" },
            children: { type: "Children", count: 0, description: "2-11 years" },
            infants: { type: "Infants", count: 0, description: "Under 2 years" },
            youth: { type: "Youth", count: 0, description: "12-25 years" },
            elderly: { type: "Elderly", count: 0, description: "67 years or older" },
            students: { type: "Students", count: 0, description: "26-31 years" },
        }),
        [drawer, setDrawer] = useState<string | null>(null)

    return (
        <main className="flex">
            <div className="w-[270px] h-screen bg-[url('/eyetracking/mountains.svg'),linear-gradient(329deg,#00602c,#1f8226)] bg-no-repeat bg-bottom">
                <div className="w-full h-[84px] px-[65px] py-[20px] mb-8">
                    <div className="relative h-full">
                        <Image src="/eyetracking/wideroe-logo.svg" alt="Widerøe logo" fill />
                    </div>
                </div>
                {step === 1 && (
                    <div className="bg-white w-[360px] ml-4 rounded fixed p-6 shadow-lg relative z-10">
                        <h2 className="mb-6 text-2xl">Book plane tickets</h2>
                        <div className="my-4 border-[1px] border-[#dce2e5] rounded text-lg">
                            <div
                                className={`inline-block w-1/2 text-center font-bold pt-4 pb-2 ${
                                    travelType === "roundtrip" ? textSelected : ""
                                } cursor-pointer`}
                                onClick={() => setTravelType("roundtrip")}
                            >
                                Roundtrip
                            </div>
                            <div
                                className={`inline-block w-1/2 text-center font-bold pt-4 pb-2 ${
                                    travelType === "oneway" ? textSelected : ""
                                } cursor-pointer`}
                                onClick={() => setTravelType("oneway")}
                            >
                                One way
                            </div>

                            <AirportSelector
                                label={"Fly from"}
                                prop={flyFrom}
                                setProp={setFlyFrom}
                                drawer={drawer}
                                setDrawer={setDrawer}
                            />

                            <AirportSelector
                                label={"Fly to"}
                                prop={flyTo}
                                setProp={setFlyTo}
                                drawer={drawer}
                                setDrawer={setDrawer}
                            />

                            <DateSelector
                                label={"Departure date"}
                                toDate={returnDate}
                                fromDate={departureDate}
                                setProp={setDepartureDate}
                                width={travelType === "roundtrip" ? "w-1/2" : "w-full"}
                                drawer={drawer}
                                setDrawer={setDrawer}
                            />

                            {travelType === "roundtrip" && (
                                <DateSelector
                                    label={"Return date"}
                                    toDate={returnDate}
                                    fromDate={departureDate}
                                    setProp={setReturnDate}
                                    width={"w-1/2"}
                                    drawer={drawer}
                                    setDrawer={setDrawer}
                                />
                            )}

                            <PassengerSelector
                                passengers={passengers}
                                setPassengers={setPassengers}
                                drawer={drawer}
                                setDrawer={setDrawer}
                            />
                        </div>

                        <button
                            className="my-4 w-full h-[58px] bg-[#a0db2a] text-[#1f8226] rounded"
                            onClick={() => setStep(2)}
                        >
                            SEARCH
                        </button>

                        <div className="mt-4">
                            <svg
                                className="inline-block align-middle"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <g transform="translate(-645.000000, -719.000000) translate(581.000000, 133.000000) translate(40.000000, 134.000000) translate(24.000000, 452.000000)">
                                        <circle cx="10" cy="10" r="9.5" fill="#F5FAF5" stroke="#369E3B"></circle>
                                        <rect width="10" height="1" x="5" y="9.5" fill="#369E3B" rx=".5"></rect>
                                        <rect width="1" height="10" x="9.5" y="5" fill="#369E3B" rx=".5"></rect>
                                    </g>
                                </g>
                            </svg>
                            <span className="text-md align-middle ml-2">Add discount code</span>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="bg-white w-[360px] ml-4 rounded fixed p-6 shadow-lg relative z-10">
                        <h2 className="mb-6 text-2xl">Thanks!</h2>
                        <div className="mb-4">
                            <p>Thanks for participating in this exercise!</p>
                        </div>
                        <button
                            className="my-4 w-full h-[58px] rounded border-2 border-[#a0db2a]"
                            onClick={() => setStep(1)}
                        >
                            Go back
                        </button>
                    </div>
                )}
            </div>
            <div className="w-[calc(100vw-270px)] h-screen">
                <div className="w-full h-[84px] px-[65px] py-[32px] flex justify-end shadow-lg relative z-10">
                    <div className="flex">
                        <svg viewBox="0 0 27 27" width="27" height="25">
                            <g id="logged-user" fill="none" transform="translate(1 1)">
                                <circle stroke="black" cx="12.5" cy="12.5" r="12.5"></circle>
                                <path
                                    stroke="black"
                                    d="M3.626 21.304A9.754 9.754 0 0 1 12.75 15c4.03 0 7.49 2.446 8.975 5.935A12.467 12.467 0 0 1 12.5 25c-3.47 0-6.609-1.413-8.874-3.696z"
                                ></path>
                                <circle stroke="black" cx="12.75" cy="8.75" r="3.75"></circle>
                            </g>
                        </svg>
                        <span className="ml-2">Sign In</span>
                    </div>
                    <div className="flex ml-12">
                        <div className="w-[20px] align-middle mt-[5px]">
                            <div className="w-full border-b-2 border-black" />
                            <div className="w-full mt-1 border-b-2 border-black" />
                            <div className="w-full mt-1 border-b-2 border-black" />
                        </div>
                        <span className="ml-2 align-middle">Menu</span>
                    </div>
                </div>

                <div className="w-full h-[500px] overflow-hidden relative z-0">
                    <div className="relative w-full h-full">
                        <Image
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src="/eyetracking/wideroe-bg.jpg"
                            alt="Hero image"
                            height={2304}
                            width={4036}
                        />
                    </div>
                    <div className="absolute bottom-[40px] right-[40px] backdrop-blur p-8 shadow-lg">
                        <p className="text-4xl font-bold text-white">WINTER MAGIC AWAITS!</p>
                        <button className="mt-4 px-8 py-2 bg-white text-[#1f8226] rounded">ORDER NOW</button>
                    </div>
                </div>

                <div className="w-full relative py-8 px-10 flex">
                    <div className="w-1/4 border-[1px] border-[#dce2e5] rounded-l pt-10 px-5 pb-8 flex justify-center items-end">
                        <div className="text-center">
                            <Image
                                className="m-auto mb-4"
                                src="/eyetracking/checkin-icon.svg"
                                alt="Check In icon"
                                width={35}
                                height={30}
                            />
                            <p className="m-auto">Check In</p>
                        </div>
                    </div>
                    <div className="w-1/4 border-[1px] border-[#dce2e5] pt-10 px-5 pb-8 flex justify-center items-end">
                        <div className="text-center">
                            <Image
                                className="m-auto mb-4"
                                src="/eyetracking/booking-icon.svg"
                                alt="My travels icon"
                                width={35}
                                height={30}
                            />
                            <p>My travels</p>
                        </div>
                    </div>
                    <div className="w-1/4 border-[1px] border-[#dce2e5] pt-10 px-5 pb-8 flex justify-center items-end">
                        <div className="text-center">
                            <Image
                                className="m-auto mb-4"
                                src="/eyetracking/plane-icon.png"
                                alt="Flight status icon"
                                width={35}
                                height={30}
                            />
                            <p>Is the flight on time?</p>
                        </div>
                    </div>
                    <div className="w-1/4 border-[1px] border-[#dce2e5] rounded-r pt-10 px-5 pb-8 flex justify-center items-end">
                        <div className="text-center">
                            <Image
                                className="m-auto mb-4"
                                src="/eyetracking/lowfare-icon.svg"
                                alt="Help icon"
                                width={35}
                                height={30}
                            />
                            <p>Help and contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
