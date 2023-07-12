"use client"

import Image from "next/image"
import { CSSProperties } from "react"

const frontStars = [
    {
        color: "pink",
        yDirection: "top",
        xDirection: "left",
        top: "26%",
        left: "30%",
        size: 160,
    },
    {
        color: "white",
        yDirection: "top",
        xDirection: "left",
        top: "30%",
        left: "32%",
        size: 160,
    },
    {
        color: "cyan",
        yDirection: "top",
        xDirection: "left",
        top: "38%",
        left: "32%",
        size: 60,
    },
    {
        color: "cyan",
        yDirection: "top",
        xDirection: "right",
        top: "38%",
        right: "32%",
        size: 80,
    },
    {
        color: "white",
        yDirection: "bottom",
        xDirection: "left",
        bottom: "34%",
        left: "35%",
        size: 80,
    },
    {
        color: "cyan",
        yDirection: "bottom",
        xDirection: "left",
        bottom: "30%",
        left: "32%",
        size: 120,
    },
    {
        color: "pink",
        yDirection: "bottom",
        xDirection: "left",
        bottom: "28%",
        left: "48%",
        size: 100,
    },
    {
        color: "white",
        yDirection: "bottom",
        xDirection: "right",
        bottom: "27%",
        right: "30%",
        size: 220,
    },
    {
        color: "cyan",
        yDirection: "bottom",
        xDirection: "right",
        bottom: "33%",
        right: "33%",
        size: 40,
    },
]

const stars = frontStars.map((star, i) => {
    let fromX = -30,
        fromY = 30

    if (star.xDirection === "right") fromX = 30
    if (star.yDirection === "top") fromY = -30

    return (
        <div
            key={i}
            className="absolute animate-show-up"
            style={
                {
                    "--fromX": fromX + "vw",
                    "--fromY": fromY + "vh",
                    [star.yDirection]: star[star.yDirection as "top" | "bottom"],
                    [star.xDirection]: star[star.xDirection as "left" | "right"],
                    animation: `show-up 2.5s`,
                } as CSSProperties
            }
        >
            <Image
                className="animate-spin animate-pulse "
                src={`/${star.color}-star.svg`}
                alt="star"
                width={star.size}
                height={star.size}
                style={{
                    animation: `pulse 3s infinite, spin 7s linear infinite`,
                }}
            />
        </div>
    )
})

export default function FrontStars() {
    return <div>{stars}</div>
}
