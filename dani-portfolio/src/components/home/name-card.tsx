"use client"

import Image from "next/image"
import { frontStars } from "./front-stars"

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

export default function NameCard() {
    return (
        <div className="text-white m-auto w-fit text-center">
            <div>{stars}</div>
            <p>Hi, I&#39;m</p>
            <p className="font-serif text-6xl my-4 animate-enlarge">Dani Fernández</p>
            <p>Product designer</p>
            <p>6 years into designing digital experiences</p>
        </div>
    )
}
