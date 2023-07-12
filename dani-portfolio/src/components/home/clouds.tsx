"use client"

import { CSSProperties } from "react"

const cloudsProps = [
    {
        height: 25,
        side: "top",
        top: -20,
        toX: -5,
    },
    {
        height: 15,
        side: "top",
        top: -15,
        toX: 20,
    },
    {
        height: 15,
        side: "bottom",
        bottom: 0,
        toX: 0,
    },
    {
        height: 25,
        side: "bottom",
        bottom: -35,
        toX: 0,
    },
]

const clouds = cloudsProps.map((cloud, i) => {
    let fromX = -100,
        fromY = 80,
        xDirection = "right",
        gradient = "bg-gradient-to-b from-pink to-purple"

    if (cloud.side === "top") {
        fromX = 100
        fromY = -80
        xDirection = "left"
        gradient = "bg-gradient-to-t from-pink to-lightPink"
    }

    return (
        <div
            key={i}
            className="absolute animate-show-up opacity-20"
            style={
                {
                    "--fromX": fromX + "vw",
                    "--fromY": fromY + "vh",
                    [cloud.side]: cloud[cloud.side as "top" | "bottom"] + "%",
                    [xDirection]: cloud.toX + "%",
                    animation: `show-up 2.5s`,
                    width: "90%",
                    height: cloud.height + "%",
                } as CSSProperties
            }
        >
            <div className={`${gradient} rounded-full -rotate-[30deg] w-full h-full`} />
        </div>
    )
})

export default function Clouds() {
    return <div>{clouds}</div>
}
