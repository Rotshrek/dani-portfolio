"use client"

import Image from "next/image"
import ReactImageMagnify from "react-image-magnify"

export default function NewUserFlow({ gridClasses }: { gridClasses: string }) {
    return (
        <div className="w-screen" id="definition">
            <div className={gridClasses}>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 pr-16 md:pr-0">
                    <p className="font-bold text-3xl text-center mb-6">Definition</p>
                    <p className="font-bold text-2xl mb-6">New user flow</p>
                    <p className="text-md mb-6">
                        Given all the previous research this was the design of final flow. We start by asking for the
                        license plate to auto-complete the car&#39;s data and finally ask for the data of the car&#39;s
                        owner. We eliminated questions that were not necessary to quote and grouped them by topic.
                    </p>
                </div>
                <div className="relative md:hidden h-[456px] w-screen overflow-scroll">
                    <div className="absolute w-[1280px] h-[456px]">
                        <Image src="/new-flow.png" fill alt="New form flow" />
                    </div>
                </div>
                <div className="hidden md:block relative md:col-span-12 md:overflow-visible ml-[-30px] md:ml-0">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: "National identity form flow",
                                src: "/new-flow.png",
                                width: 880,
                                height: 300,
                                isFluidWidth: true,
                            },
                            largeImage: {
                                src: "/new-flow.png",
                                width: 3520,
                                height: 1200,
                            },
                            enlargedImagePosition: "over",
                            isHintEnabled: true,
                            enlargedImageClassName: "max-w-none bg-white",
                        }}
                    />
                </div>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 mt-4 md:mt-8 pr-16 md:pr-0">
                    <p className="font-bold text-2xl mb-6">New input system</p>
                    <p className="text-md">
                        Together with the fronts, we decided to build a new library of inputs. These would provide
                        better feedback to the user, and aid information. They would have a status of success, tooltips,
                        loading, among others.
                    </p>
                </div>
                <div className="md:col-span-3 hidden md:block" />
                <div className="md:col-span-6 mt-8 pr-16 md:pr-0">
                    <Image
                        className="rounded-lg"
                        src="/new-inputs-small.png"
                        height={228}
                        width={445}
                        alt="New types of text inputs for forms"
                    />
                </div>
                <div className="relative md:col-span-12 h-[403px] md:h-[310px] hidden md:block">
                    <div className="md:absolute md:w-full h-[403px] md:h-[310px] md:left-1/2 md:translate-x-[-50%]">
                        <Image src="/new-inputs-details.png" fill alt="Details on new types of text inputs" />
                    </div>
                </div>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 md:mt-8 pr-16 md:pr-0">
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
                <div className="md:col-span-12 pr-16 md:pr-0">
                    <Image
                        className="m-auto rounded-lg"
                        src="/handoff.jpg"
                        height={508}
                        width={879}
                        alt="Handoff to development"
                    />
                </div>
                <div className="md:col-span-12 text-right pr-16 md:pr-0">
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
