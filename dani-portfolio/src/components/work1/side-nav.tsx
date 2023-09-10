"use client"

import { useCallback, useEffect, useRef, useState } from "react"

function NavElem({ id, text, scrollY }: { id: string; text: string; scrollY: number }) {
    const [active, setActive] = useState(false),
        ref = useRef<HTMLAnchorElement>(null),
        deviceHeight = typeof window !== "undefined" ? window.innerHeight : 700,
        textColor = scrollY > deviceHeight - 200 - (ref.current?.offsetTop || 0) ? "text-purple" : "text-white"

    return (
        <a
            ref={ref}
            href={`#${id}`}
            className={`block hover:text-lightPink px-4 py-2 relative duration-1000 ${textColor} ${
                active ? "text-bold" : ""
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
        textColor = scrollY > deviceHeight - 200 - (ref.current?.offsetTop || 0) ? "text-purple" : "text-white"

    const onScroll = useCallback(() => {
        if (typeof window !== "undefined") {
            const { pageYOffset } = window
            setScrollY(pageYOffset)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("scroll", onScroll, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("scroll", onScroll, { passive: true })
        }
    }, [])

    return (
        <div className="hidden md:block fixed top-[200px] ml-8">
            <p className={`italic mb-2 text-sm duration-1000 ${textColor}`}>On this site</p>
            <NavElem id="context" text="Context" scrollY={scrollY} />
            <NavElem id="design-process" text="Design process" scrollY={scrollY} />
            <NavElem id="research" text="Research" scrollY={scrollY} />
            <NavElem id="iteration" text="Iteration" scrollY={scrollY} />
            <NavElem id="definition" text="Definition" scrollY={scrollY} />
            <NavElem id="take-away" text="Take away" scrollY={scrollY} />
        </div>
    )
}
