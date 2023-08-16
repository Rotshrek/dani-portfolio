"use client"

import { useState } from "react"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const urlClasses = "text-white hover:text-darkPurple px-4 py-2 relative duration-1000 text-right",
        drawerClasses = openMenu ? " right-0" : " right-[-200px] md:right-0"

    const handleDrawer = () => setOpenMenu(!openMenu)

    return (
        <div className="flex justify-between pt-8 px-8 absolute w-full z-50">
            <div className="flex">
                <a href="/" className={urlClasses + " font-serif text-xl"}>
                    Dani Fernández
                </a>
            </div>
            <div className="flex flex-col md:flex-row min-w-[170px] overflow-hidden">
                <a className="text-white text-right font-bold text-xl md:hidden mb-4" onClick={handleDrawer}>
                    {openMenu ? ">" : "<"}
                </a>
                <a href="/work" className={urlClasses + drawerClasses}>
                    Work
                </a>
                <a href="/about" className={urlClasses + drawerClasses}>
                    About me
                </a>
                <a href="/projects" className={urlClasses + drawerClasses}>
                    QA for recruiters
                </a>
                <a href="/projects" className={urlClasses + drawerClasses}>
                    Contact
                </a>
                <span className="text-white py-2 hidden md:block">|</span>
                <a className={urlClasses + drawerClasses}>Norsk</a>
            </div>
        </div>
    )
}
