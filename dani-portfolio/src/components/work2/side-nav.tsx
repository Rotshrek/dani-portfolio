"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

const sections = [
    {
        id: "context",
        text: "Context",
    },
    {
        id: "design-process",
        text: "Design Process",
    },
    {
        id: "research",
        text: "Research",
    },
    // {
    //     id: "iteration",
    //     text: "Iteration",
    // },
    // {
    //     id: "definition",
    //     text: "Definition",
    // },
    // {
    //     id: "take-away",
    //     text: "Take Away",
    // },
]

function NavElem({ id, text, scrollY, index }: { id: string; text: string; scrollY: number; index: number }) {
    const [upperBound, setUpperBound] = useState(0),
        [lowerBound, setLowerBound] = useState(0),
        active = scrollY > upperBound && scrollY < lowerBound,
        ref = useRef<HTMLAnchorElement>(null),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        textColor = scrollY > deviceHeight - 220 - (ref.current?.offsetTop || 0) ? "text-purple" : "text-white"

    useEffect(() => {
        if (typeof document !== "undefined") {
            const { offsetTop, offsetHeight } = document.getElementById(id) || { offsetTop: 0, offsetHeight: 0 },
                nextSection = document.getElementById(sections[index + 1]?.id)

            if (nextSection) {
                const { offsetTop: nextOffsetTop } = nextSection
                setLowerBound(nextOffsetTop - 100)
            } else setLowerBound(offsetTop + offsetHeight - 160)

            setUpperBound(offsetTop - 100)
        }
    }, [])

    return (
        <a
            ref={ref}
            href={`#${id}`}
            className={`block hover:text-lightPink px-4 py-2 relative duration-1000 ${textColor} ${
                active ? "font-bold ml-4 text-lg" : "font-normal"
            }`}
        >
            {text}
        </a>
    )
}

export default function SideNav() {
    const [scrollY, setScrollY] = useState(0),
        ref = useRef<HTMLAnchorElement>(null),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        textColor = scrollY > deviceHeight - 240 - (ref.current?.offsetTop || 0) ? "text-purple" : "text-white"

    const onScroll = useCallback(() => {
        if (typeof window !== "undefined") {
            const { pageYOffset } = window
            setScrollY(pageYOffset)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <div className="fixed top-[200px] left-[calc(50vw-630px)] z-50">
            <p className={`hidden xl:block italic mb-2 text-sm duration-1000 ${textColor}`}>On this page</p>
            {sections.map(({ id, text }, index) => (
                <NavElem key={id} id={id} text={text} scrollY={scrollY} index={index} />
            ))}
            {scrollY > deviceHeight && (
                <div className="fixed bottom-[20px] right-[20px] md:bottom-[30px] md:right-[40px]">
                    <a
                        href="#landing"
                        className="flex shadow-md shadow-black hover:text-lightPink relative duration-1000 rounded-full bg-white h-[40px] w-[40px]"
                    >
                        <Image className="m-auto" src="/arrow.svg" width={24} height={24} alt="arrow up" />
                    </a>
                    <p className="relative italic mt-2 text-xs left-[-12px]">Back to Top</p>
                </div>
            )}
        </div>
    )
}
