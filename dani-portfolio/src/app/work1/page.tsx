"use client"

import DefinePhase from "@/components/work1/define-phase"
import DesignProcess from "@/components/work1/design-process"
import DiscoveryPhase from "@/components/work1/discovery-phase"
import Work1Landing from "@/components/work1/landing"

export const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[968px] h-full m-auto py-20"

export default function Work1() {
    return (
        <main>
            <Work1Landing />
            <DesignProcess />
            <DiscoveryPhase />
            <DefinePhase />
        </main>
    )
}
