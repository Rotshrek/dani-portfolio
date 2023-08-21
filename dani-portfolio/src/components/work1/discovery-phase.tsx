"use client"

import Image from "next/image"

export default function DiscoveryPhase({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen bg-darkPurple h-[75vh]">
                <div className={gridClasses}>
                    <div className="md:col-span-12">
                        <p className="font-display text-white text-6xl mb-8 text-center">Discovery Phase</p>
                    </div>
                    <div className="md:col-span-6">
                        <p className="font-display text-lightPink text-2xl mb-6">Experience before redesign</p>
                        <p className="text-lg text-white mb-6">
                            We had these Initial hypotheses of issues encountered while using the form ourselves:
                        </p>
                        <ol className="text-lg text-white list-disc pl-6">
                            <li>Too many clicks needed.</li>
                            <li>Too many questions asked (Almost twice as much as the main competitor).</li>
                            <li>No auto filling data we already know about our customers.</li>
                            <li>Ambiguous steps.</li>
                            <li>No context for the user (form name or breadcrumbs).</li>
                            <li>Inconsistent labeling.</li>
                        </ol>
                    </div>
                    <div className="md:col-span-6">
                        <Image
                            className="mt-20"
                            src="/compara-screen.png"
                            width={500}
                            height={300}
                            alt="Compara online website"
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen bg-darkBlue h-[75vh]">
                <div className={gridClasses}>
                    <div className="md:col-span-8">
                        <p className="font-display text-lightPink text-2xl mb-6">Interviews: Call center</p>
                        <p className="text-lg text-white">
                            I moderated one-on-one interviews with 10 executives to discover possible user pain points.
                            These were the main findings:
                        </p>
                    </div>
                    <div className="md:col-span-4"></div>
                    <div className="md:col-span-4 mt-8">
                        <Image
                            src="/unclear-information.svg"
                            width={276}
                            height={200}
                            alt="diagram about unclear information"
                        />
                        <p className="text-white mt-6">
                            Users mistakenly believed that their <strong>car may be insured by a third party</strong>{" "}
                            because the form had one confusing question.
                        </p>
                    </div>
                    <div className="md:col-span-4">
                        <Image
                            src="/data-entry-issues.svg"
                            width={276}
                            height={200}
                            alt="diagram about data entry issues"
                        />
                        <p className="text-white mt-6">
                            Due to the lack of clear instructions, users entered{" "}
                            <strong>incorrect information in the “model” and ”year”</strong> inputs.
                        </p>
                    </div>
                    <div className="md:col-span-4 mt-8">
                        <Image
                            src="/insurance-selection.svg"
                            width={276}
                            height={200}
                            alt="diagram about insurance slection"
                        />
                        <p className="text-white mt-6">
                            Users seeking insurance for commercial use had a negative experience, due our lack of
                            coverage options, <strong>which was communicated at the end of the quoting process.</strong>
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-purple h-[75vh]">
                <div className={gridClasses + " gap-y-6"}>
                    <div className="md:col-span-12">
                        <p className="font-display text-lightPink text-2xl mb-6">Benchmark</p>
                    </div>
                    <p className="md:col-span-6 text-lg text-white mb-4">
                        We made an <strong>information architecture benchmark</strong> with 6 direct competitors. The
                        objetive was to find patterns to meet user expectations in quoting car insurances online.
                    </p>
                    <p className="md:col-span-6 text-lg text-white mb-4">
                        In the table below, the rows are the competitors and the colums are the questions of the
                        competitors forms (inputs).
                    </p>
                    <div className="relative md:col-span-12 h-[170px]">
                        <div className="absolute w-[1280px] h-[170px] left-1/2 translate-x-[-50%]">
                            <Image src="/benchmark.png" fill alt="Benchmarking timeline" />
                        </div>
                    </div>
                    <p className="md:col-span-4 text-lg text-white">
                        Form tend to ask for the vehicle details first and then for the owner personal data.
                    </p>
                    <p className="md:col-span-4 text-lg text-white">
                        Our form has more questions than our competitors.
                    </p>
                    <p className="md:col-span-4 text-lg text-white">
                        Unlike our competitors we have the insured&#39;s data distributed in different places.
                    </p>
                </div>
            </div>
        </div>
    )
}
