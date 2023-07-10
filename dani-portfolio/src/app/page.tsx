"use client"

import Image from "next/image"
import { CSSProperties, ReactElement, useCallback, useEffect, useState } from "react"

const baseSize = 120,
    starsAmount = 15,
    colors = ["white", "pink", "cyan"]

export default function Home() {
    const [stars, setStars] = useState<ReactElement[]>([])

    const generateBackgroundStars = useCallback((starsAmount: number) => {
        const newStars = []
        for (let i = 0; i < starsAmount; i++) {
            const starSize = baseSize + Math.random() * baseSize,
                starColor = colors[Math.floor(Math.random() * colors.length)]

            let direction = "forwards"
            if (i % 2 === 0) direction = "reverse"

            let xDirection = "right",
                yDirection = "bottom",
                fromX = 20,
                fromY = 20
            if (i > starsAmount / 4 && i < starsAmount / 2) {
                xDirection = "left"
                yDirection = "bottom"
                fromX = -20
            } else if (i >= starsAmount / 2 && i <= starsAmount / 1.5) {
                xDirection = "right"
                yDirection = "top"
                fromY = -20
            } else if (i > starsAmount / 1.5) {
                xDirection = "left"
                yDirection = "top"
                fromX = -20
                fromY = -20
            }

            newStars.push(
                <div
                    key={i}
                    className="absolute opacity-40 animate-show-up"
                    style={
                        {
                            "--fromX": fromX + Math.random() * fromX + "vw",
                            "--fromY": fromY + Math.random() * fromY + "vh",
                            [yDirection]: `${Math.random() * 30}%`,
                            [xDirection]: `${Math.random() * 30}%`,
                            animation: `show-up 2.5s, show-up 180s 2.5s reverse forwards, show-up 2.5s 182.5s forwards`,
                        } as CSSProperties
                    }
                >
                    <Image
                        className="animate-spin animate-pulse "
                        src={`/${starColor}-star.svg`}
                        alt="star"
                        width={starSize}
                        height={starSize}
                        style={{
                            animation: `pulse ${2 + Math.random() * 2}s infinite, spin ${
                                2 + Math.ceil(Math.random() * 6)
                            }s linear infinite ${direction}`,
                        }}
                    />
                </div>
            )
        }
        return newStars
    }, [])

    useEffect(() => {
        const newStars = generateBackgroundStars(starsAmount)
        setStars(newStars)
    }, [generateBackgroundStars])

    return (
        <main className="bg-gradient-to-b from-pink to-purple flex h-screen">
            <div className="text-white m-auto w-fit text-center">
                <p>Hi, I&#39;m</p>
                <p className="font-serif text-6xl my-4">Dani Fernández</p>
                <p>Product designer</p>
                <p>6 years into designing digital experiences</p>
            </div>
            <div className="absolute h-screen w-screen overflow-hidden">{stars}</div>
        </main>
    )
}
