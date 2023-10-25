"use client"

import { useEffect, useState } from "react"

const baseClasses =
    "hidden md:block absolute bg-darkPurple rounded-lg py-4 px-4 mt-2 z-[100] top-20 right-2 duration-1000 opacity-100"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false),
        [openWorksDropdown, setOpenWorksDropdown] = useState(false),
        [dropDownClasses, setDropDownClasses] = useState(baseClasses + " hidden")

    const urlClasses = "text-white hover:text-lightPink mr-4 py-2 relative duration-1000 text-right cursor-pointer",
        drawerClasses = openMenu ? " right-0" : " right-[-200px] md:right-0",
        projectClasses = " md:hidden"

    const handleDrawer = () => setOpenMenu(!openMenu)

    useEffect(() => {
        if (openWorksDropdown) {
            setDropDownClasses(baseClasses + " animate-dropdown")
            setTimeout(() => {
                setDropDownClasses(baseClasses + " animate-none")
            }, 250)
        } else setDropDownClasses(baseClasses + " hidden")
    }, [openWorksDropdown])

    useEffect(() => {
        if (typeof window !== "undefined") window.addEventListener("click", handleCloseDropDown, { passive: true })
        return () => {
            if (typeof window !== "undefined") window.removeEventListener("click", handleCloseDropDown)
        }
    })

    const handleOpenDropDown = () => setOpenWorksDropdown(true),
        handleCloseDropDown = () => {
            setDropDownClasses(baseClasses + " animate-dropdownReverse")
            setTimeout(() => {
                setOpenWorksDropdown(false)
            }, 250)
        },
        handleWorksDropdown = (e) => {
            e.stopPropagation()
            if (openWorksDropdown) handleCloseDropDown()
            else handleOpenDropDown()
        }

    return (
        <div className="flex justify-between pt-8 px-8 absolute w-full z-50">
            <div className="flex min-w-[180px]">
                <a href="/" className={urlClasses + " text-xl px-0"}>
                    Dani Fernández
                </a>
            </div>
            <div
                className={`flex flex-col md:flex-row min-w-[170px] overflow-hidden duration-1000 ${
                    openMenu ? "bg-darkPurple md:bg-transparent" : ""
                }`}
            >
                <a
                    className="text-white text-right font-bold text-xl md:hidden mb-4 mr-2 cursor-pointer"
                    onClick={handleDrawer}
                >
                    {openMenu ? ">" : "<"}
                </a>
                <a href="/work1" className={urlClasses + drawerClasses + projectClasses}>
                    Case study 1
                </a>
                <a href="/work2" className={urlClasses + drawerClasses + projectClasses}>
                    Case study 2
                </a>
                <a onClick={handleWorksDropdown} className={urlClasses + drawerClasses + " hidden md:block"}>
                    My Work
                </a>
                <a href="/about" className={urlClasses + drawerClasses}>
                    About me
                </a>
                {/* <a href="/qa" className={urlClasses + drawerClasses}>
                    QA for recruiters
                </a>
                <a href="/about" className={urlClasses + drawerClasses}>
                    Contact
                </a> */}
                {/* <span className="text-white py-2 hidden md:block">|</span>
                <a className={urlClasses + drawerClasses}>Norsk</a> */}
            </div>
            <div className={dropDownClasses}>
                <a href="/work1" className={urlClasses + " block ml-4"} onClick={handleCloseDropDown}>
                    Case study 1: Resigning the way to quote
                </a>
                <a href="/work2" className={urlClasses + " block ml-4"} onClick={handleCloseDropDown}>
                    Case study 2: Improving data visualization in the salmon industry
                </a>
                <a href="/work3" className={urlClasses + " block ml-4 pointer-events-none opacity-50"}>
                    Case study 3: Building a user account for car insurance clients
                </a>
            </div>
        </div>
    )
}
