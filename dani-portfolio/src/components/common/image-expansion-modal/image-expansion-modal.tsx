"use client"

import { useEffect, useState } from "react"
import ReactImageMagnify from "react-image-magnify"

const baseClasses =
    "fixed top-0 left-0 bg-lightGray w-screen h-screen bg-opacity-95 flex justify-center items-center z-40"

export default function ImageExpansionModal({
    image,
    alt,
    onClick,
    open,
    width,
    height,
}: {
    image: string
    alt: string
    onClick: () => void
    open: boolean
    width: number
    height: number
}) {
    const narrowScreen = typeof window !== "undefined" && window?.innerHeight < height,
        narrowScreenHeight = (window?.innerHeight || height) - 100,
        narrowScreenWidth = ((window?.innerHeight || width) - 100) * (width / height),
        [classes, setClasses] = useState("hidden" + baseClasses)

    useEffect(() => {
        if (open) {
            setClasses(baseClasses + " animate-appear")
            setTimeout(() => {
                setClasses(baseClasses + " animate-none")
            }, 250)
        } else setClasses(baseClasses + " hidden")
    }, [open])

    const handleClosing = () => {
        setClasses(baseClasses + " animate-disappear")
        setTimeout(() => {
            onClick()
        }, 250)
    }

    return (
        <div className={classes} onClick={handleClosing}>
            <div className="m-auto">
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: alt,
                            src: image,
                            isFluidWidth: !narrowScreen,
                            width: narrowScreen ? narrowScreenWidth : width,
                            height: narrowScreen ? narrowScreenHeight : height,
                        },
                        largeImage: {
                            src: image,
                            width: width,
                            height: height,
                        },
                        enlargedImagePosition: "over",
                        isHintEnabled: false,
                        enlargedImageClassName: "max-w-none bg-white",
                    }}
                />
                <p className="text-center text-sm mt-8">Hover to zoom</p>
            </div>
        </div>
    )
}
