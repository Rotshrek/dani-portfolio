"use client"

import Image from "next/image"

export default function DesignProcess({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen" id="design-process">
            <div className={gridClasses}>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8">
                    <p className="font-bold text-3xl mb-8 text-center">Design Process</p>
                    <p className="text-md mb-6">
                        <strong>We organized the workload into 6 weeks. Details can be seen in the table below.</strong>
                    </p>
                    <ol className="text-md list-disc pl-6 mb-10">
                        <li>
                            <strong>Understanding the project:</strong> We conducted desk research to gain an initial
                            understanding of the industry and its challenges. We also conducted interviews with users to
                            get a deep understanding of their needs, pain points, and behaviors.
                        </li>
                        <li>
                            <strong>Synthesizing the insights:</strong> We analyzed the data gathered from the research
                            and identified key themes and opportunities. This helped us to define the problem that we
                            were trying to solve with the app.
                        </li>
                        <li>
                            <strong>Prototyping:</strong> We created low-fidelity and high-fidelity prototypes of the
                            app to gather feedback.
                        </li>
                        <li>
                            <strong>Iterating on the prototype:</strong> We iterated on the prototype based on the
                            feedback we received from users. We made changes to the design, functionality, and features
                            of the app.
                        </li>
                    </ol>
                    <Image
                        className="m-auto rounded-lg"
                        src="/work2/process.svg"
                        width={685}
                        height={373}
                        alt="gantt chart for the process"
                    />
                </div>
            </div>
        </div>
    )
}
