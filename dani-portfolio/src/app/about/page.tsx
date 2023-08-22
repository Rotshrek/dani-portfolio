"use client"

import BottomNav from "@/components/bottom-nav"
import Image from "next/image"

export default function About() {
    return (
        <main className="min-h-screen ">
            <div className="py-36 max-w-[968px] m-auto">
                <div className="inline-block w-2/3 pr-12">
                    <p className="font-display text-lightPink text-6xl mb-12">About me</p>
                    <p className="font-serif text-white text-xl mt-8 max-w-[1048px]">
                        👋 Hey there! I'm Dani, a designer with a passion for creating delightful digital experiences. I
                        consider myself a cheerful, responsible person who enjoys working in a team.
                    </p>
                    <p className="font-serif text-white text-xl mt-8 max-w-[1048px]">
                        My design journey began in Chile, my home country, where I completed my bachelor's degree in
                        design at one of the best universities in my country. I graduated with honors and ranked at the
                        top of my generation. Since then, I have completed various postgraduate courses in UX design and
                        have worked in different IT companies, first as a UX/UI designer and later as a UX/UI Lead
                        designer.
                    </p>
                    <p className="font-serif text-white text-xl mt-8 max-w-[1048px]">
                        In August 2022, I relocated to Norway, embarking on the next chapter of my life: pursuing a
                        master's program in Interaction Design at NTNU. Presently, I am in the final year of my master's
                        program, holding the position of Teacher Assistant at NTNU, and actively participating in level
                        2 of the Norwegian course provided by the university.
                    </p>
                    <p className="font-serif text-white text-xl mt-8 max-w-[1048px]">
                        When I'm not knee-deep in design, you can catch me adventuring through fiction realms, baking
                        sweets, and giving my plants and my fish sidekick, Antonio, the VIP treatment they deserve 🐟🪴
                    </p>
                </div>
                <div className="inline-block w-1/3 relative">
                    <Image
                        className="relative mb-[-60px] translate-x-1/2 z-10"
                        src="/about-dani.png"
                        width={260}
                        height={346}
                        alt="Dani holding pastries"
                    />
                    <Image
                        className="relative mb-[-60px] z-20"
                        src="/about-colors.png"
                        width={254}
                        height={338}
                        alt="Dani holding pastries"
                    />
                    <Image
                        className="relative mb-[-60px] translate-x-1/2 z-30"
                        src="/about-fish.png"
                        width={289}
                        height={217}
                        alt="Dani holding pastries"
                    />
                </div>
            </div>
            <BottomNav />
        </main>
    )
}
