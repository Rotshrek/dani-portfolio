"use client"

import React, { useEffect, useMemo, useState } from "react"
import MonthRenderer from "./month-renderer"
import { FlyDate } from "./page"

interface DateSelectorProps {
    toDate: FlyDate
    fromDate: FlyDate
    label: string
    setProp: (prop: FlyDate) => void
    width?: string
    drawer: string | null
    setDrawer: (drawer: string | null) => void
}

const monthsOfTheYear = [
    {
        name: "January",
        days: 31,
    },
    {
        name: "February",
        days: 28,
    },
    {
        name: "March",
        days: 31,
    },
    {
        name: "April",
        days: 30,
    },
    {
        name: "May",
        days: 31,
    },
    {
        name: "June",
        days: 30,
    },
    {
        name: "July",
        days: 31,
    },
    {
        name: "August",
        days: 31,
    },
    {
        name: "September",
        days: 30,
    },
    {
        name: "October",
        days: 31,
    },
    {
        name: "November",
        days: 30,
    },
    {
        name: "December",
        days: 31,
    },
]

export default function DateSelector({
    toDate,
    fromDate,
    label,
    setProp,
    width,
    drawer,
    setDrawer,
}: DateSelectorProps) {
    const [openMenu, setOpenMenu] = useState(false),
        [propIsSelected, setPropIsSelected] = useState(false),
        today = new Date(),
        thisMonth = today.getMonth(),
        thisYear = today.getFullYear(),
        [monthShown, setMonthShown] = useState(0),
        selectableMonths = useMemo(() => {
            return Array.from({ length: 12 }, (_, i) => {
                let month: number = i + thisMonth
                if (month > 11) month = month - 12

                const year = month >= thisMonth ? thisYear : thisYear + 1

                return {
                    month,
                    year,
                    days: monthsOfTheYear[month].days,
                }
            })
        }, [thisMonth])

    const handleCloseDrawer = () => {
        if (drawer === label) setDrawer(null)
        setOpenMenu(false)
    }

    useEffect(() => {
        if (drawer !== label) setOpenMenu(false)
    }, [drawer])

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("click", handleCloseDrawer, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("click", handleCloseDrawer)
        }
    })

    const handleOpenDropDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setOpenMenu(!openMenu)
        if (!openMenu) setDrawer(label)
        else setDrawer(null)
    }

    const handleSelectDay = (day: number, month: number, year: number, userSet?: boolean) => {
        setProp({
            day,
            month,
            year,
            userSet,
        })
        setPropIsSelected(true)
        setOpenMenu(false)
    }

    const handleAddMonth = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setMonthShown(monthShown + 1)
    }

    const handleSubtractMonth = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setMonthShown(monthShown - 1)
    }

    return (
        <div
            className={`inline-block h-[64px] p-4 border-[1px] ${
                openMenu ? "border-[#1f8226]" : "border-[#dce2e5]"
            } cursor-pointer ${width}`}
            onClick={handleOpenDropDown}
        >
            <div className="h-[34px] overflow-hidden">
                <label
                    className={`cursor-pointer relative z-20 ${
                        propIsSelected ? "-top-2 left-0 text-sm opacity-60" : "top-0 left-0 text-lg opacity-100"
                    }`}
                >
                    {label}
                </label>
                {propIsSelected && (
                    <p className="relative -top-4">
                        {label === "Return date"
                            ? toDate.day + " " + monthsOfTheYear[toDate.month].name.substr(0, 3) + " " + toDate.year
                            : fromDate.day +
                              " " +
                              monthsOfTheYear[fromDate.month].name.substr(0, 3) +
                              " " +
                              fromDate.year}
                    </p>
                )}
            </div>
            {openMenu && (
                <div className="cursor-default absolute top-0 right-[-716px] w-[720px] p-8 h-full bg-white overflow-scroll border-[1px] border-[#dce2e5] z-30 shadow-lg">
                    <div className="w-full flex justify-end mb-6 cursor-pointer" onClick={handleCloseDrawer}>
                        <svg className="inline-block align-middle rotate-45" width="30" height="30" viewBox="0 0 20 20">
                            <g fill="none" fill-rule="evenodd">
                                <g transform="translate(-645.000000, -719.000000) translate(581.000000, 133.000000) translate(40.000000, 134.000000) translate(24.000000, 452.000000)">
                                    <circle cx="10" cy="10" r="9.5" fill="#F5FAF5" stroke="#369E3B"></circle>
                                    <rect width="10" height="1" x="5" y="9.5" fill="#369E3B" rx=".5"></rect>
                                    <rect width="1" height="10" x="9.5" y="5" fill="#369E3B" rx=".5"></rect>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="w-full flex justify-between">
                        <MonthRenderer
                            name={monthsOfTheYear[selectableMonths[monthShown].month].name}
                            days={selectableMonths[monthShown].days}
                            month={selectableMonths[monthShown].month}
                            year={selectableMonths[monthShown].year}
                            selectDay={handleSelectDay}
                            toDate={toDate}
                            fromDate={fromDate}
                            propIsSelected={propIsSelected}
                        />
                        <MonthRenderer
                            name={monthsOfTheYear[selectableMonths[monthShown + 1].month].name}
                            days={selectableMonths[monthShown + 1].days}
                            month={selectableMonths[monthShown + 1].month}
                            year={selectableMonths[monthShown + 1].year}
                            selectDay={handleSelectDay}
                            toDate={toDate}
                            fromDate={fromDate}
                            propIsSelected={propIsSelected}
                        />
                    </div>
                    {monthShown < 10 && (
                        <div className="absolute right-10 top-20 mt-1 cursor-pointer" onClick={handleAddMonth}>
                            <span className="font-bold text-[#1f8226] text-2xl">&gt;</span>
                        </div>
                    )}
                    {monthShown > 0 && (
                        <div className="absolute left-10 top-20 mt-1 cursor-pointer" onClick={handleSubtractMonth}>
                            <span className="font-bold text-[#1f8226] text-2xl">{"<"}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
