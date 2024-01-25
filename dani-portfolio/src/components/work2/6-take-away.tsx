"use client"

import Image from "next/image"

export default function TakeAway({ gridClasses }: { gridClasses: string }) {
    const deviceWidth = typeof window !== "undefined" ? window?.innerWidth : 1280,
        bgHeight = Math.ceil((deviceWidth * 1636) / 1280)

    return (
        <div id="take-away">
            <div className="w-screen relative z-10 bg-[url('/work2/wave-bg.svg')] bg-cover">
                <div className={gridClasses + "  mt-20 md:pt-0 border-b-2"}>
                    <div className="md:col-span-6">
                        <div className="relative mt-[-80px]">
                            <p className="font-bold mb-4 text-md text-center">Phone home screen with the widgets</p>
                            <Image
                                className="m-auto p-4"
                                src="/work2/home-screen.png"
                                width={374}
                                height={764}
                                alt="Home screen of the application"
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="md:col-span-6 mb-10 md:mb-20 mt-10 md:mt-40">
                        {/* <Image
                            className="m-auto"
                            src="/work2/home-screen.png"
                            width={374}
                            height={764}
                            alt="Widgets of the application"
                        /> */}
                        <video className="m-auto mb-4 rounded-lg" autoPlay muted loop width={416} height={749}>
                            <source src="/work2/widgets.mov" type="video/mp4" />
                        </video>
                        <p className="font-bold text-md my-2 text-center text-white">Widgets in the App</p>
                    </div>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8 text-white mb-8">
                        <p className="font-bold text-3xl text-center mb-6">Take Away!</p>
                        <ol className="text-md list-disc pl-6">
                            <li>
                                This project was presented at NTNU University for the Information Visualization course,
                                receiving the highest grade, an A.
                            </li>
                            <li>
                                Our client, Clarify, was pleased with the solution and the work carried out during the
                                period.
                            </li>
                            <li>
                                One of the biggest challenges of the project revolved around information hierarchy. Not
                                all users shared the same perspective, and the needs differed between land-based and
                                sea-based fish farming professionals. We addressed this by enhancing information
                                customization. This was achieved by implementing three levels of widgets and the ability
                                to select which widgets to display.
                            </li>
                            <li>
                                We also encountered challenges such as time constraints and industry complexities, but
                                we were able to overcome them through teamwork, gaining valuable lessons in
                                communication, collaboration, and problem-solving.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
