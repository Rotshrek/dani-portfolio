export default function Navbar() {
    const urlClasses = "text-white hover:text-purple px-4 py-2",
        dividerClasses = "text-white py-2"

    return (
        <div className="flex justify-between pt-8 px-8 absolute w-full">
            <div className="flex">
                <a href="/" className={urlClasses + " font-serif text-xl"}>
                    Dani Fernández
                </a>
            </div>
            <div className="flex">
                <a href="/work" className={urlClasses}>
                    Work
                </a>
                <a href="/about" className={urlClasses}>
                    About me
                </a>
                <a href="/projects" className={urlClasses}>
                    QA for recruiters
                </a>
                <a href="/projects" className={urlClasses}>
                    Contact
                </a>
                <span className={dividerClasses}>|</span>
                <a href="/projects" className={urlClasses}>
                    Norsk
                </a>
            </div>
        </div>
    )
}
