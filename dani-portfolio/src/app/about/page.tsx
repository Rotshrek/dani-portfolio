"use client"

import BottomNav from "@/components/common/bottom-nav"
import Image from "next/image"

export default function About() {
    return (
        <main className="min-h-screen ">
            <div className="py-24 md:py-36 max-w-[968px] m-auto">
                <div className="inline-block md:w-2/3 p-8 md:pr-16">
                    <p className="font-display text-lightPink text-5xl md:text-6xl mb-12">About me</p>
                    <p className="text-white text-xl mt-8 max-w-[1048px]">
                        👋 Hey there! I&#39;m Dani, a designer with a passion for creating delightful digital
                        experiences. I consider myself a cheerful, responsible person who enjoys working in a team.
                    </p>
                    <Image
                        className="md:hidden mt-6 m-auto"
                        src="/about-dani.png"
                        width={205}
                        height={274}
                        alt="Dani holding pastries"
                    />
                    <p className="text-white text-xl mt-8 max-w-[1048px]">
                        My design journey began in Chile, my home country, where I completed my bachelor&#39;s degree in
                        design at one of the best universities in my country. I graduated with honors and ranked at the
                        top of my generation. Since then, I have completed various postgraduate courses in UX design and
                        have worked in different IT companies, first as a UX/UI designer and later as a UX/UI Lead
                        designer.
                    </p>
                    <Image
                        className="md:hidden mt-6 m-auto"
                        src="/about-colors.png"
                        width={201}
                        height={267}
                        alt="Dani looking at an Art exhibition in the Moco Museum, Amsterdam"
                    />
                    <p className="text-white text-xl mt-8 max-w-[1048px]">
                        In August 2022, I relocated to Norway, embarking on the next chapter of my life: pursuing a
                        master&#39;s program in Interaction Design at NTNU. Presently, I am in the final year of my
                        master&#39;s program, holding the position of Teacher Assistant at NTNU, and actively
                        participating in level 2 of the Norwegian course provided by the university.
                    </p>
                    <p className="text-white text-xl mt-8 max-w-[1048px]">
                        When I&#39;m not knee-deep in design, you can catch me adventuring through fiction realms,
                        baking sweets, and giving my plants and my fish sidekick, Antonio, the VIP treatment they
                        deserve 🐟🪴
                    </p>
                    <Image
                        className="md:hidden mt-6 m-auto"
                        src="/about-fish.png"
                        width={229}
                        height={172}
                        alt="Pesquecito Antonio, the fish"
                    />
                    <p className="text-white font-bold text-xl mt-8 max-w-[1048px]">Let&#39;s keep in touch!</p>
                    <p className="text-white font-bold text-xl max-w-[1048px]">
                        Contact me at <a href="mailto:daniferlue@gmail.com">daniferlue@gmail.com </a>
                    </p>
                </div>
                <div className="md:inline-block w-1/3 relative hidden align-top pt-32">
                    <Image
                        className="relative mb-[-60px] translate-x-1/2 z-10"
                        src="/about-dani.png"
                        width={205}
                        height={274}
                        alt="Dani holding pastries"
                    />
                    <Image
                        className="relative mb-[-60px] z-20"
                        src="/about-colors.png"
                        width={201}
                        height={267}
                        alt="Dani looking at an Art exhibition in the Moco Museum, Amsterdam"
                    />
                    <Image
                        className="relative mb-[-60px] translate-x-1/2 z-30"
                        src="/about-fish.png"
                        width={229}
                        height={172}
                        alt="Pesquecito Antonio, the fish"
                    />
                </div>
            </div>
            <BottomNav />
        </main>
    )
}
