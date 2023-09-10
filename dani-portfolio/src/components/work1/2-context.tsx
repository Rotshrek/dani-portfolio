"use client"

import Image from "next/image"

export default function Context({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white">
            <div className={gridClasses}>
                <div className="md:col-span-2" />
                <div className="md:col-span-8">
                    <p className="text-4xl mb-10 text-center font-bold">Context</p>
                    <p className="text-md mb-8">
                        Before the redesign, the quoting experience was an intricate and extensive form. Upon reviewing
                        it, we raised our own hypotheses of problems and opportunities for improvement.
                    </p>
                    <ol className="text-md list-disc pl-6 mb-10">
                        <li>Too many clicks needed.</li>
                        <li>Too many questions asked (Almost twice as much as the main competitor).</li>
                        <li>No auto filling data we already know about our customers.</li>
                        <li>Ambiguous steps. </li>
                        <li>No context for the user (form name or breadcrumbs).</li>
                        <li>Inconsistent labeling.</li>
                    </ol>
                    <Image className="m-auto" src="/context.png" width={574} height={346} alt="Compara online screen" />
                </div>
            </div>
        </div>
    )
}
