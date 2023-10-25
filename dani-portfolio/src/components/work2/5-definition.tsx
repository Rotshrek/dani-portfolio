"use client"

import Image from "next/image"
import { useState } from "react"
import ImageExpansionModal from "../common/image-expansion-modal"

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
        <div id="definition">
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
                    <div className="pr-10 md:pr-0 md:col-span-8">
                        <p className="font-bold text-3xl mb-10 text-center">Definition</p>
                        <p className="font-bold text-2xl mb-6">UI references and inspiration</p>
                        <p className="text-md mb-6">
                            Before proceeding to the final prototyping phase, we familiarized ourselves with widget
                            guidelines and gathered examples to ensure design consistency
                        </p>
                    </div>

                    <div className="md:col-span-12 overflow-visible w-[calc(100vw-4rem)] md:w-auto">
                        <div className="relative md:col-span-12 h-[889px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                            <div className="hidden md:block md:absolute w-[1342px] h-[889px] left-1/2 translate-x-[-50%]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/ui-references.png"
                                    fill
                                    alt="UI references and inspiration"
                                />
                            </div>
                            <div className="absolute md:hidden w-[1342px] h-[889px]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/ui-references.png"
                                    fill
                                    alt="UI references and inspiration"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2" />
                    <div className="md:col-span-8">
                        <div className="mb-10">
                            <p className="text-md text-2xl font-bold mb-2">App Concept</p>
                            <p className="text-md mb-6">
                                We also designed a &lsquo;Dashboard&rsquo; page in the existing App. It house all the widgets we
                                created. In this concept, users can swipe through different fish pens, similar to a
                                weather app.
                            </p>
                            <Image
                                className="m-auto"
                                src="/work2/sketches6.png"
                                width={576}
                                height={709}
                                alt="Sketches of the app concept"
                            />
                            <p className="text-md font-bold text-2xl mb-2 mt-10">High Fidelity Prototypes</p>
                            <p className="text-md">
                                The final designs consist of three different types of widgets that display distinct sets
                                of data: Biology data, feeding data, and environmental data. Additionally, each widget
                                offers three designs or levels that users can choose to add to their home screen based
                                on their needs. Level one displays the most essential information, while levels two and
                                three provide more details.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2" />
                    <div className="md:col-span-2" />
                    <div className="pr-10 md:pr-0 md:col-span-8">
                        <p className="font-bold text-2xl mb-2">Biology data</p>
                    </div>
                    <div className="md:col-span-12 overflow-visible w-[calc(100vw-4rem)] md:w-auto">
                        <div className="relative h-[375px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                            <div className="hidden md:block md:absolute w-[883px] h-[375px] left-1/2 translate-x-[-50%]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/biology-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing biology data"
                                />
                            </div>
                            <div className="absolute md:hidden w-[883px] h-[375px]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/biology-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing biology data"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2" />
                    <div className="pr-10 md:pr-0 md:col-span-8">
                        <p className="font-bold text-2xl mb-2">Feeding data</p>
                    </div>
                    <div className="md:col-span-12 overflow-visible w-[calc(100vw-4rem)] md:w-auto">
                        <div className="relative md:col-span-12 h-[375px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                            <div className="hidden md:block md:absolute w-[881px] h-[375px] left-1/2 translate-x-[-50%]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/feeding-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing feeding data"
                                />
                            </div>
                            <div className="absolute md:hidden w-[881px] h-[375px]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/feeding-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing feeding data"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2" />
                    <div className="pr-10 md:pr-0 md:col-span-8">
                        <p className="font-bold text-2xl mb-2">Environmental data</p>
                    </div>
                    <div className="md:col-span-12 overflow-visible w-[calc(100vw-4rem)] md:w-auto">
                        <div className="relative md:col-span-12 h-[375px] w-screen md:w-auto overflow-scroll md:overflow-visible ml-[-30px] md:ml-0">
                            <div className="hidden md:block md:absolute w-[881px] h-[375px] left-1/2 translate-x-[-50%]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/environmental-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing environmental data"
                                />
                            </div>
                            <div className="absolute md:hidden w-[881px] h-[375px]">
                                <Image
                                    className="rounded-lg"
                                    src="/work2/environmental-data.svg"
                                    fill
                                    alt="High fidelity prototypes showing environmental data"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
