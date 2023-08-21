"use client"

import DefinePhase from "@/components/work1/define-phase"
import NewUserFlow from "@/components/work1/new-user-flow"
import DesignProcess from "@/components/work1/design-process"
import DesignRecommendation from "@/components/work1/design-recommendations"
import DesignRecommendation2 from "@/components/work1/design-recommendations-2"
import DiscoveryPhase from "@/components/work1/discovery-phase"
import Work1Landing from "@/components/work1/landing"
import NewSurvey from "@/components/work1/new-survey"
import SomethingUnexpected from "@/components/work1/something-unexpected"
import TakeAway from "@/components/work1/take-away"
import UsabilityTest from "@/components/work1/usability-test"

const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[968px] h-full m-auto py-20"

export default function Work1() {
    return (
        <main>
            <Work1Landing gridClasses={gridClasses} />
            <DesignProcess gridClasses={gridClasses} />
            <DiscoveryPhase gridClasses={gridClasses} />
            <DefinePhase gridClasses={gridClasses} />
            <DesignRecommendation />
            <UsabilityTest gridClasses={gridClasses} />
            <DesignRecommendation2 />
            <SomethingUnexpected gridClasses={gridClasses} />
            <NewSurvey gridClasses={gridClasses} />
            <NewUserFlow gridClasses={gridClasses} />
            <TakeAway gridClasses={gridClasses} />
        </main>
    )
}
