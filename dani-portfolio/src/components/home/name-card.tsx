"use client"

import FrontStars from "./front-stars"

export default function NameCard() {
    return (
        <div className="text-white m-auto w-fit text-center">
            <FrontStars />
            <p>Hi, I&#39;m</p>
            <p className="font-display text-6xl my-4 animate-enlarge">Dani Fernández</p>
            <p>Product designer</p>
            <p>5 years into designing digital experiences</p>
        </div>
    )
}
