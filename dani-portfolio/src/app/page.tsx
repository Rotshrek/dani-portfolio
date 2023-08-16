"use client"

import BackgroundStars from "@/components/home/background-stars"
import Clouds from "@/components/home/clouds"
import NameCard from "@/components/home/name-card"

export default function Home() {
    return (
        <main className="bg-gradient-to-b from-pink to-darkPurple flex h-screen w-screen">
            <BackgroundStars />
            <Clouds />
            <NameCard />
        </main>
    )
}
