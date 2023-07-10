"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const baseSize = 120,
    starsAmount = 12,
    colors = ["white", "pink", "cyan"]

export default function Home() {
    const [stars, setStars] = useState([])

    const generateStars = useCallback((starsAmount: number) => {
        const newStars = []
        for (let i = 0; i < starsAmount; i++) {
            const starSize = baseSize + Math.random() * baseSize,
                starColor = colors[Math.floor(Math.random() * colors.length)]
    
            newStars.push(
                <div
                    key={i}
                    className="absolute opacity-40 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                >
                    <Image src={`/${starColor}-star.svg`} alt="star" width={starSize} height={starSize} />
                </div>
            )
        }
        return newStars
    }, [])
    
    useEffect(() => {
        const newStars = generateStars(starsAmount)
        setStars(newStars)
    }, [generateStars])

    return (
        <main className="bg-gradient-to-b from-pink to-purple flex h-screen">
            <div className="text-white m-auto w-fit text-center">
                <p>Hi, I&#39;m</p>
                <p className="font-serif text-6xl my-4">Dani Fernández</p>
                <p>Product designer</p>
                <p>6 years into designing digital experiences</p>
            </div>
            <div className="absolute h-screen w-screen overflow-hidden">
                {stars}
            </div>
        </main>
    )
}
