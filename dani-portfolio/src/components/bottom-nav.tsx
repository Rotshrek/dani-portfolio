"use client"

export default function BottomNav() {
    const urlClasses = "block text-white hover:text-lightPink px-4 py-2 relative duration-1000"

    return (
        <div className="min-w-[170px] max-w-[968px] m-auto px-8 md:px-0">
            <div className="flex flex-col justify-between md:flex-row py-12">
                <div>
                    <p className={urlClasses}>
                        <strong>Work</strong>
                    </p>
                    <a href="/work1" className={urlClasses + " ml-4"}>
                        Case study 1: Resigning the way to quote
                    </a>
                    <a href="/work2" className={urlClasses + " ml-4 pointer-events-none opacity-50"}>
                        Case study 2: Improving data visualization in the salmon industry
                    </a>
                    <a href="/work3" className={urlClasses + " ml-4 pointer-events-none opacity-50"}>
                        Case study 3: Building a user account for car insurance clients
                    </a>
                </div>
                <div>
                    <a href="/about" className={urlClasses}>
                        <strong>About me</strong>
                    </a>
                    {/* <a href="/qa" className={urlClasses}>
                        <strong>QA for recruiters</strong>
                    </a>
                    <a href="/about" className={urlClasses}>
                        <strong>Contact</strong>
                    </a> */}
                </div>
                <div>
                    <p className="text-lightPink text-xl py-2 font-bold text-center">Thanks for reading!</p>
                </div>
            </div>
        </div>
    )
}
