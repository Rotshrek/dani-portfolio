"use client"

export default function BottomNav() {
    const urlClasses = "block text-white hover:text-lightPink px-4 py-2 relative duration-1000"

    return (
        <div className="min-w-[170px] max-w-[968px] m-auto">
            <div className="flex flex-col justify-between md:flex-row py-12 border-t-2 border-white">
                <div>
                    <p className={urlClasses}>
                        <strong>Work</strong>
                    </p>
                    <a href="/work1" className={urlClasses + " ml-4"}>
                        Case study 1: Resigning the way to quote
                    </a>
                    <a href="/work2" className={urlClasses + " ml-4"}>
                        Case study 2
                    </a>
                    <a href="/work3" className={urlClasses + " ml-4"}>
                        Case study 3
                    </a>
                </div>
                <div>
                    <a href="/about" className={urlClasses}>
                        <strong>About me</strong>
                    </a>
                    <a href="/projects" className={urlClasses}>
                        <strong>QA for recruiters</strong>
                    </a>
                    <a href="/projects" className={urlClasses}>
                        <strong>Contact</strong>
                    </a>
                </div>
                <div>
                    <p className="text-lightPink text-xl py-2 font-bold">Thanks for reading!</p>
                </div>
            </div>
        </div>
    )
}
