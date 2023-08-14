"use client"

import Image from "next/image"
import { CSSProperties, ReactElement, useCallback, useEffect, useState } from "react"

const colors = ["white", "pink", "cyan"]

export default function BackgroundStars() {
    const [stars, setStars] = useState<ReactElement[]>([])

    const smallDevice = typeof window !== "undefined" && window?.innerWidth < 640,
        yConstant = smallDevice ? 32 : 27,
        xConstant = smallDevice ? 20 : 27,
        baseSize = smallDevice ? 60 : 100,
        starsAmount = smallDevice ? 12 : 15

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
                    className="absolute opacity-30 animate-show-up"
                    style={
                        {
                            "--fromX": fromX + Math.random() * fromX + "vw",
                            "--fromY": fromY + Math.random() * fromY + "vh",
                            [yDirection]: `${Math.random() * yConstant}%`,
                            [xDirection]: `${Math.random() * xConstant}%`,
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

    return <div className="absolute h-screen w-screen overflow-hidden">{stars}</div>
}
