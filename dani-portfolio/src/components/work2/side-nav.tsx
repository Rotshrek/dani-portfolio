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
        text: "Research & Iterations",
    },
    {
        id: "definition",
        text: "Definition",
        offset: 1000,
    },
    {
        id: "take-away",
        text: "Take Away",
        color: true,
        offset: 2300,
    },
]

function NavElem({
    id,
    text,
    scrollY,
    index,
    lastSectionY,
    setLastSectionY,
}: {
    id: string
    text: string
    scrollY: number
    index: number
    lastSectionY: number
    setLastSectionY: (y: number) => void
}) {
    const [upperBound, setUpperBound] = useState(0),
        [lowerBound, setLowerBound] = useState(0),
        active = scrollY > upperBound && scrollY < lowerBound,
        ref = useRef<HTMLAnchorElement>(null),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        textColor = active
            ? "text-green"
            : scrollY > deviceHeight - 220 - (ref.current?.offsetTop || 0) &&
              scrollY < lastSectionY + 360 - (ref.current?.offsetTop || 0)
            ? "text-purple"
            : "text-white"

    useEffect(() => {
        if (typeof document !== "undefined") {
            const { offsetTop, offsetHeight } = document.getElementById(id) || { offsetTop: 0, offsetHeight: 0 },
                nextSection = document.getElementById(sections[index + 1]?.id)

            if (nextSection) {
                const { offsetTop: nextOffsetTop } = nextSection
                setLowerBound(nextOffsetTop - 200 - (sections[index + 1]?.offset || 0))
            } else {
                setLastSectionY(offsetTop - 200 - (sections[index]?.offset || 0))
                setLowerBound(offsetTop + offsetHeight - 1060)
            }

            setUpperBound(offsetTop - 200 - (sections[index]?.offset || 0))
        }
    }, [])

    return (
        <a
            ref={ref}
            href={`#${id}`}
            className={`block hover:text-green px-4 py-2 relative duration-1000 ${textColor} ${
                active ? "font-bold ml-4 text-lg" : "font-normal"
            }`}
        >
            {text}
        </a>
    )
}

export default function SideNav() {
    const [scrollY, setScrollY] = useState(0),
        [lastSectionY, setLastSectionY] = useState(0),
        ref = useRef<HTMLAnchorElement>(null),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        textColor =
            scrollY > deviceHeight - 240 - (ref.current?.offsetTop || 0) &&
            scrollY < lastSectionY + 360 - (ref.current?.offsetTop || 0)
                ? "text-purple"
                : "text-white"

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
                <NavElem
                    key={id}
                    id={id}
                    text={text}
                    scrollY={scrollY}
                    index={index}
                    lastSectionY={lastSectionY}
                    setLastSectionY={setLastSectionY}
                />
            ))}
            {scrollY > deviceHeight && (
                <div className="hidden md:block fixed bottom-[20px] right-[20px] md:bottom-[30px] md:right-[40px]">
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
