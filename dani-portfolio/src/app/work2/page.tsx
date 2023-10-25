"use client"

import BottomNav from "@/components/common/bottom-nav"
import Work1Landing from "@/components/work2/1-landing"
import Context from "@/components/work2/2-context"
import DesignProcess from "@/components/work2/3-design-process"
import Research from "@/components/work2/4-research"
import Definition from "@/components/work2/5-definition"
import TakeAway from "@/components/work2/6-take-away"
import SideNav from "@/components/work2/side-nav"

const gridClasses = "grid md:grid-cols-12 gap-8 max-w-[880px] h-full m-auto px-8 py-12 md:px-0 md:py-16 auto-rows-min"

export default function Work2() {
    return (
        <main className="overflow-hidden relative">
            <SideNav />
            <div className="bg-lightGray">
                <Work1Landing gridClasses={gridClasses} />
                <Context gridClasses={gridClasses} />
                <DesignProcess gridClasses={gridClasses} />
                <Research gridClasses={gridClasses} />
                <Definition gridClasses={gridClasses} />
                <TakeAway gridClasses={gridClasses} />
            </div>
            <BottomNav />
        </main>
    )
}
