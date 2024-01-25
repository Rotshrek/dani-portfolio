"use client"

import Image from "next/image"
import { useState } from "react"
import ReactImageMagnify from "react-image-magnify"
import ImageExpansionModal from "../common/image-expansion-modal"

const defaultImage = {
    image: "",
    alt: "",
    width: 0,
    height: 0,
}

export default function NewUserFlow({ gridClasses }: { gridClasses: string }) {
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
        <div className="w-screen" id="definition">
            <ImageExpansionModal
                image={image.image}
                alt={image.alt}
                width={image.width}
                height={image.height}
                onClick={closeModal}
                open={modalOpen}
            />
            <div className={gridClasses}>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 pr-10 md:pr-0">
                    <p className="font-bold text-3xl text-center mb-6">Definition</p>
                    <p className="font-bold text-2xl mb-6">New user flow</p>
                    <p className="text-md mb-6">
                        Given all the previous research this was the design of final flow. We start by asking for the
                        license plate to auto-complete the car&#39;s data and finally ask for the data of the car&#39;s
                        owner. We eliminated questions that were not necessary to quote and grouped them by topic.
                    </p>
                </div>
                <div className="relative md:col-span-12 h-[561px] md:h-[330px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                    <div className="hidden md:block md:absolute w-full h-[300px] left-1/2 translate-x-[-50%]">
                        <Image
                            className="rounded-lg cursor-zoom-in"
                            src="/work1/new-flow.png"
                            fill
                            alt="New form flow"
                            onClick={() => openModal("/work1/new-flow.png", "New form flow", 3520, 1200)}
                        />
                    </div>
                    <div className="absolute md:hidden w-[1280px] h-[561px]">
                        <Image
                            className="rounded-lg"
                            src="/work1/new-flow.png"
                            width={1280}
                            height={561}
                            alt="New form flow"
                            quality={100}
                        />
                    </div>
                    <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">Click to expand</p>
                </div>
                <p className="md:hidden w-full -mt-4 text-sm text-center pr-10">
                    Scroll right to see the full diagram.
                </p>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 mt-4 md:mt-8 pr-10 md:pr-0">
                    <p className="font-bold text-2xl mb-6">New input system</p>
                    <p className="text-md">
                        Together with the fronts, we decided to build a new library of inputs. These would provide
                        better feedback to the user, and aid information. They would have a status of success, tooltips,
                        loading, among others.
                    </p>
                </div>
                <div className="relative md:col-span-12 h-[668px] md:h-[698px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                    <div className="hidden md:block m-auto">
                        <Image
                            className="rounded-lg cursor-zoom-in"
                            src="/work1/new-inputs.png"
                            alt="New types of text inputs"
                            width={880}
                            height={668}
                            quality={100}
                            onClick={() => openModal("/work1/new-inputs.png", "New types of text inputs", 2640, 2005)}
                        />
                    </div>
                    <div className="absolute md:hidden w-[880px] h-[668px]">
                        <Image
                            className="rounded-lg"
                            src="/work1/new-inputs.png"
                            width={880}
                            height={668}
                            alt="New types of text inputs"
                        />
                    </div>
                    <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">Click to expand</p>
                </div>
                <p className="md:hidden w-full -mt-4 text-sm text-center pr-10">
                    Scroll right to see the full input system.
                </p>
                <div className="md:col-span-2 hidden md:block" />
                <div className="md:col-span-8 md:mt-8 pr-10 md:pr-0">
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
                <div className="relative md:col-span-12 h-[510px] md:h-[539px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                    <div className="hidden md:block md:absolute w-[880px] h-[510px] left-1/2 translate-x-[-50%]">
                        <Image
                            className="rounded-lg cursor-zoom-in"
                            src="/work1/handoff.png"
                            fill
                            alt="Handoff to development"
                            onClick={() => openModal("/work1/handoff.png", "Handoff to development", 1760, 1019)}
                        />
                    </div>
                    <div className="absolute md:hidden w-[880px] h-[510px]">
                        <Image
                            className="rounded-lg"
                            src="/work1/handoff.png"
                            width={880}
                            height={510}
                            alt="Handoff to development"
                            quality={100}
                        />
                    </div>
                    <p className="hidden md:block md:absolute bottom-0 w-full text-center text-sm">Click to expand</p>
                </div>
                <p className="md:hidden w-full -mt-4 text-sm text-center pr-10">Scroll right to see the full chart.</p>
                <div className="md:col-span-12 text-right pr-10 md:pr-0">
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
