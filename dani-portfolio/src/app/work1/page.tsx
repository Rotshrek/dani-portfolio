"use client"

import DefinePhase from "@/components/work1/define-phase"
import DesignProcess from "@/components/work1/design-process"
import DesignRecommendation from "@/components/work1/design-recommendations"
import DiscoveryPhase from "@/components/work1/discovery-phase"
import Work1Landing from "@/components/work1/landing"
import UsabilityTest from "@/components/work1/usability-test"

const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[968px] h-full m-auto py-20"

export default function Work1() {
    return (
        <main>
            <Work1Landing gridClasses={gridClasses} />
            <DesignProcess gridClasses={gridClasses} />
            <DiscoveryPhase gridClasses={gridClasses} />
            <DefinePhase gridClasses={gridClasses} />
            <DesignRecommendation gridClasses={gridClasses} />
            <UsabilityTest gridClasses={gridClasses} />
        </main>
    )
}
