"use client"

import Image from "next/image"

export default function NewUserFlow({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen bg-white">
            <div className={gridClasses}>
                <div className="md:col-span-2" />
                <div className="md:col-span-8">
                    <p className="font-bold text-4xl text-center mb-6">Definition</p>
                    <p className="font-bold text-2xl mb-6">New user flow</p>
                    <p className="text-md mb-6">
                        Given all the previous research this was the design of final flow. We start by asking for the
                        license plate to auto-complete the car&#39;s data and finally ask for the data of the car&#39;s
                        owner. We eliminated questions that were not necessary to quote and grouped them by topic.
                    </p>
                </div>
                <div className="relative md:col-span-12 h-[456px] md:h-[268px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                    <div className="absolute w-[1280px] md:w-full h-[456px] md:h-[268px] md:left-1/2 md:translate-x-[-50%]">
                        <Image src="/new-flow.svg" fill alt="New form flow" />
                    </div>
                </div>
                <div className="md:col-span-2" />
                <div className="md:col-span-8 mt-4 md:mt-8 pr-12 md:pr-0">
                    <p className="font-bold text-2xl mb-6">New input system</p>
                    <p className="text-md">
                        Together with the fronts, we decided to build a new library of inputs. These would provide
                        better feedback to the user, and aid information. They would have a status of success, tooltips,
                        loading, among others.
                    </p>
                </div>
                <div className="md:col-span-3" />
                <div className="md:col-span-6 mt-8 pr-12 md:pr-0">
                    <Image src="/new-inputs.png" height={228} width={445} alt="New types of text inputs for forms" />
                </div>
                <div className="relative md:col-span-12 h-[403px] md:h-[338px] hidden md:block">
                    <div className="md:absolute md:w-full md:h-[403px] md:h-[338px] md:left-1/2 md:translate-x-[-50%]">
                        <Image src="/new-input-details.png" fill alt="New form flow" />
                    </div>
                </div>
                <div className="md:col-span-2" />
                <div className="md:col-span-8 md:mt-8 pr-12 md:pr-0">
                    <p className="font-bold text-2xl mb-6">Handoff to development</p>
                    <p className="text-md">
                        As a team (UX and Front), this was the way we defined to facilitate the designs to development.
                        This was an iterative process in co-creation with front.
                    </p>
                    <p className="text-md mt-6">
                        We included arrows that indicated flow. This way it was easier to understand what the navigation
                        should be like, in addition, I added details in boxes so developers could find everything they
                        need to build de form in one single place.
                    </p>
                </div>
                <div className="md:col-span-12 md:min-h-screen pr-12 md:pr-0">
                    <Image
                        className="m-auto"
                        src="/handoff.png"
                        height={1119}
                        width={879}
                        alt="Handoff to development"
                    />
                </div>
                <div className="md:col-span-12 text-right pr-12 md:pr-0">
                    <a
                        href="https://www.figma.com/file/1Boh16TmDAvE6tTnP2Ki5Y/Cotizacio%CC%81n-CICL?type=design&node-id=2102%3A49992&mode=design&t=RUDtx62WYegODiLO-1"
                        target="_blank"
                        className="inline-block border rounded-full px-4 py-1 font-bold"
                    >
                        Open File in browser
                        <span className="ml-3">{">"}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
