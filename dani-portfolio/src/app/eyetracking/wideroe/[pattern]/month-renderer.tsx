"use client"

import React from "react"
import { FlyDate } from "./page"

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

interface MonthRendererProps {
    name: string
    days: number
    month: number
    year: number
    selectDay: (day: number, month: number, year: number, userSet?: boolean) => void
    toDate: FlyDate
    fromDate: FlyDate
    propIsSelected: boolean
}

export default function MonthRenderer({ name, days, month, year, selectDay, toDate, fromDate }: MonthRendererProps) {
    const today = new Date(),
        thisDay = today.getDate(),
        thisMonth = today.getMonth(),
        thisYear = today.getFullYear(),
        firstWeekDay = new Date(year, month, 1).getDay()

    const isBeforeToday = (day: number, month: number, year: number) => {
        if (year < thisYear) return true
        if (year === thisYear && month < thisMonth) return true
        if (year === thisYear && month === thisMonth && day < thisDay) return true
        return false
    }

    const handleClickDay = (day: number, month: number, year: number) => {
        if (isBeforeToday(day, month, year)) return
        selectDay(day, month, year, true)
    }

    return (
        <div className="w-[calc(50%-12px)]">
            <div className="font-bold text-center mb-2">
                {name} {year}
            </div>
            <table className="w-full">
                <thead>
                    <tr className="text-center">
                        {daysOfTheWeek.map((day) => (
                            <th key={day} className="px-2 py-4 border-[1px] border-[#dce2e5] font-regular text-sm">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 5 }, (_, i) => {
                        return (
                            <tr key={i} className="text-center">
                                {Array.from({ length: 7 }, (_, weekDay) => {
                                    const day = i * 7 + weekDay - firstWeekDay + 2,
                                        dateIsSelected =
                                            (toDate.userSet &&
                                                day === toDate.day &&
                                                month === toDate.month &&
                                                year === toDate.year) ||
                                            (fromDate.userSet &&
                                                day === fromDate.day &&
                                                month === fromDate.month &&
                                                year === fromDate.year),
                                        dateIsBetween =
                                            toDate.userSet &&
                                            fromDate.userSet &&
                                            (day < toDate.day || month < toDate.month) &&
                                            (day > fromDate.day || month > fromDate.month) &&
                                            month >= fromDate.month &&
                                            year >= fromDate.year &&
                                            month <= toDate.month &&
                                            year <= toDate.year

                                    return (
                                        <td
                                            key={"day" + day}
                                            className={`px-2 py-3 border-[1px] border-[#dce2e5] text-[#1f8226] font-bold  
                                                ${
                                                    isBeforeToday(day, month, year) || day < 1 || day > days
                                                        ? "text-[#dce2e5]"
                                                        : "cursor-pointer hover:bg-lightGray hover:underline"
                                                } ${dateIsSelected && "bg-[#1f8226] text-white"}
                                                ${dateIsBetween && "bg-[#bbd9bd]"}`}
                                            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                                event.stopPropagation()
                                                if (!isBeforeToday(day, month, year) && day > 0 && day <= days)
                                                    handleClickDay(day, month, year)
                                            }}
                                        >
                                            {day > 0 && day <= days ? day : ""}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
