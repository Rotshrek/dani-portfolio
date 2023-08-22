"use client"

import BottomNav from "@/components/bottom-nav"
import BackgroundStars from "@/components/home/background-stars"
import Clouds from "@/components/home/clouds"
import NameCard from "@/components/home/name-card"
import Work1 from "@/components/home/work1"
import Work2 from "@/components/home/work2"
import Work3 from "@/components/home/work3"

export default function Home() {
    return (
        <main>
            <div className="bg-gradient-to-b from-pink to-darkPurple flex h-screen w-screen">
                <BackgroundStars />
                <Clouds />
                <NameCard />
            </div>
            <Work1 />
            <Work2 />
            <Work3 />
            <BottomNav />
        </main>
    )
}
