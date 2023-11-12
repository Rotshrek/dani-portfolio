"use client"

import NewUserFlow from "@/components/work1/10-new-user-flow"
import DesignProcess from "@/components/work1/3-design-process"
import DesignRecommendation from "@/components/work1/5-design-recommendations"
import DesignRecommendation2 from "@/components/work1/7-design-recommendations-2"
import Research from "@/components/work1/4-research"
import Work1Landing from "@/components/work1/1-landing"
import NewSurvey from "@/components/work1/9-new-survey"
import SomethingUnexpected from "@/components/work1/8-something-unexpected"
import TakeAway from "@/components/work1/11-take-away"
import UsabilityTest from "@/components/work1/6-usability-test"
import BottomNav from "@/components/common/bottom-nav"
import Context from "@/components/work1/2-context"
import SideNav from "@/components/work1/side-nav"

const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[880px] h-full m-auto px-8 py-12 md:px-0 md:py-16 auto-rows-min"

export default function Work1() {
    return (
        <main className="overflow-hidden relative">
            <SideNav />
            <Work1Landing gridClasses={gridClasses} />
            <div className="bg-lightGray">
                <Context gridClasses={gridClasses} />
                <DesignProcess gridClasses={gridClasses} />
                <Research gridClasses={gridClasses} />
                <DesignRecommendation />
                <UsabilityTest gridClasses={gridClasses} />
                <DesignRecommendation2 />
                <SomethingUnexpected gridClasses={gridClasses} />
                <NewSurvey gridClasses={gridClasses} />
                <NewUserFlow gridClasses={gridClasses} />
                <TakeAway gridClasses={gridClasses} />
            </div>
            <BottomNav />
        </main>
    )
}
