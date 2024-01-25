"use client"

import Image from "next/image"

export default function Context({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen" id="context">
            <div className={gridClasses}>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8">
                    <p className="text-3xl mb-10 text-center font-bold">Context</p>
                    <ol className="text-md list-disc pl-6 mb-10">
                        <li>
                            Clarify&apos;s platform <strong>indexes and visualizes data points in a timeline</strong>{" "}
                            primarily using line graphs.
                        </li>
                        <li>
                            These line graphs are effective for <strong>comparing current and past data</strong>,
                            reviewing specific data points, and predicting future data trends.
                        </li>
                        <li>
                            Compounding data from multiple sources can{" "}
                            <strong>make the overview complex and challenging to interpret.</strong>
                        </li>
                        <li>
                            Several customers in the aquaculture industry rely on Clarify for shared awareness of farm
                            conditions.
                        </li>
                        <li>
                            Enhancing user-friendly charts and visualizations is essential to improve data clarity in
                            this context.
                        </li>
                    </ol>
                    <Image
                        className="m-auto rounded-lg"
                        src="/work2/context.png"
                        width={574}
                        height={346}
                        alt="Platform screen"
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}
