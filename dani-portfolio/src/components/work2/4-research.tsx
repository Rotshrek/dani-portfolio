"use client"

import Image from "next/image"
import { useState } from "react"
import ImageExpansionModal from "../common/image-expansion-modal"
import Iteration1 from "./4.1-iteration1"
import Iteration2 from "./4.2-iteration2"
import Iteration3 from "./4.3-iteration3"
import Iteration4 from "./4.4-iteration4"

const defaultImage = {
    image: "",
    alt: "",
    width: 0,
    height: 0,
}

export default function Research({ gridClasses }: { gridClasses: string }) {
    const [modalOpen, setModalOpen] = useState(false),
        [image, setImage] = useState(defaultImage)

    const openModal = (image: string, alt: string, width: number, height: number) => {
        setImage({
            image,
            alt,
            height,
            width,
        })
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setImage(defaultImage)
    }

    return (
        <div id="research">
            <ImageExpansionModal
                image={image.image}
                alt={image.alt}
                width={image.width}
                height={image.height}
                onClick={closeModal}
                open={modalOpen}
            />
            <div className="w-screen">
                <div className={gridClasses}>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8 mb-8">
                        <p className="font-bold text-3xl mb-10 text-center">Research and Iterations</p>
                        <p className="font-bold text-2xl mb-2">Stakeholder map</p>
                        <p className="text-md mb-6">
                            We created a stakeholder map to ensure that we take into account and meet the needs of
                            stakeholders involved throughout the project.
                        </p>
                        <ol className="text-md list-disc pl-6 mb-10">
                            <li>
                                <strong>Core users:</strong> Include fish farmers and operational technicians who will
                                be using the app on a daily basis. The core users have been mapped out further in the
                                following personas.
                            </li>
                            <li>
                                <strong>Direct stakeholders:</strong> Include the CEO, investors, and suppliers who have
                                a vested interest in the success of the app and its impact on the fish farm business.
                            </li>
                            <li>
                                <strong>Indirect stakeholders:</strong> Include government agencies, regulatory bodies,
                                and local communities who may be affected by the fish farm operations and the app&aph;s
                                impact on the environment.
                            </li>
                        </ol>
                        {/* <Image
                            className="m-auto"
                            src="/work2/stakeholders.svg"
                            width={604}
                            height={963}
                            alt="Stakeholder map"
                        /> */}
                    </div>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="pr-10 md:pr-0 md:col-span-8">
                        <p className="font-bold text-2xl mb-6">User Personas</p>
                        <p className="text-md mb-6">
                            We developed two user personas.{" "}
                            <strong>Our primary user persona was based on our core stakeholders.</strong> In addition to
                            her profile, we created an empathy map emphasizing her goals and behavior.
                        </p>
                        <p className="text-md mb-6">
                            We initiated the mapping process with assumptions and then refined them using information
                            gathered from user interviews.
                        </p>
                    </div>
                    <div className="relative md:col-span-12 h-[523px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0 mb-8">
                        <div className="hidden md:block md:absolute w-full h-[493px] left-1/2 translate-x-[-50%]">
                            <Image
                                className="rounded-lg"
                                src="/work2/primary-user-persona.svg"
                                fill
                                alt="Ingrid, the operations technician is the primary persona"
                                // onClick={() => openModal("/work2/primary-user-persona.svg", "Ingrid, the operations technician is the primary persona", 4550, 610)}
                            />
                        </div>
                        <div className="absolute md:hidden w-[878px] h-[493px]">
                            <Image
                                className="rounded-lg"
                                src="/work2/primary-user-persona.svg"
                                fill
                                alt="Ingrid, the operations technician is the primary persona"
                            />
                        </div>
                        <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">
                            Primary user persona profile
                        </p>
                    </div>
                    <div className="relative md:col-span-12 h-[526px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0 mb-8">
                        <div className="hidden md:block md:absolute w-full h-[495px] left-1/2 translate-x-[-50%]">
                            <Image
                                className="rounded-lg"
                                src="/work2/primary-user-empathy-map.svg"
                                fill
                                alt="Ingrid&aph;s overall goal is to produce high quality fish products"
                                // onClick={() => openModal("/work2/primary-user-empathy-map.svg", "Ingrid&aph;s overall goal is to produce high quality fish products", 4550, 610)}
                            />
                        </div>
                        <div className="absolute md:hidden w-[880px] h-[495px]">
                            <Image
                                className="rounded-lg"
                                src="/work2/primary-user-empathy-map.svg"
                                fill
                                alt="Ingrid&aph;s overall goal is to produce high quality fish products"
                            />
                        </div>
                        <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">
                            Primary user persona empathy map
                        </p>
                    </div>
                    <div className="relative md:col-span-12 h-[521px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0 mb-8">
                        <div className="hidden md:block md:absolute w-full h-[491px] left-1/2 translate-x-[-50%]">
                            <Image
                                className="rounded-lg"
                                src="/work2/secondary-user-persona.svg"
                                fill
                                alt="Erik, the CEO is the secondary persona"
                                // onClick={() => openModal("/work2/secondary-user-persona.svg", "Erik, the CEO is the secondary persona", 4550, 610)}
                            />
                        </div>
                        <div className="absolute md:hidden w-[878px] h-[491px]">
                            <Image
                                className="rounded-lg"
                                src="/work2/secondary-user-persona.svg"
                                fill
                                alt="Erik, the CEO is the secondary persona"
                            />
                        </div>
                        <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">
                            Secondary user persona profile
                        </p>
                    </div>

                    {/* <Iteration1 />
                    <Iteration2 />
                    <Iteration3 />
                    <Iteration4 /> */}
                </div>
            </div>
        </div>
    )
}
