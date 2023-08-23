"use client"

import DefinePhase from "@/components/work1/4-define-phase"
import NewUserFlow from "@/components/work1/10-new-user-flow"
import DesignProcess from "@/components/work1/2-design-process"
import DesignRecommendation from "@/components/work1/5-design-recommendations"
import DesignRecommendation2 from "@/components/work1/7-design-recommendations-2"
import DiscoveryPhase from "@/components/work1/3-discovery-phase"
import Work1Landing from "@/components/work1/1-landing"
import NewSurvey from "@/components/work1/9-new-survey"
import SomethingUnexpected from "@/components/work1/8-something-unexpected"
import TakeAway from "@/components/work1/11-take-away"
import UsabilityTest from "@/components/work1/6-usability-test"
import BottomNav from "@/components/bottom-nav"

const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[968px] h-full m-auto px-8 py-16 md:px-0 md:py-20"

export default function Work1() {
    return (
        <main className="overflow-hidden">
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
            <BottomNav />
        </main>
    )
}
