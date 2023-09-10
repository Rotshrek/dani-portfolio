"use client"

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
    {
        id: "iteration",
        text: "Iteration",
    },
    {
        id: "definition",
        text: "Definition",
    },
    {
        id: "take-away",
        text: "Take Away",
    },
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
                active ? "font-bold" : ""
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
        <div className="hidden xl:block fixed top-[200px] left-[calc(50vw-650px)]">
            <p className={`italic mb-2 text-sm duration-1000 ${textColor}`}>On this site</p>
            {sections.map(({ id, text }, index) => (
                <NavElem key={id} id={id} text={text} scrollY={scrollY} index={index} />
            ))}
        </div>
    )
}
