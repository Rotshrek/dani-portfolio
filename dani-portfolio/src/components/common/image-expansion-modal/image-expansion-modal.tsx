"use client"

import ReactImageMagnify from "react-image-magnify"

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
        narrowScreenWidth = ((window?.innerHeight || width) - 100) * (width / height)

    return (
        <div
            className={`${
                open ? "fixed" : "hidden"
            } top-0 left-0 bg-lightGray w-screen h-screen bg-opacity-90 flex justify-center items-center z-40`}
            onClick={onClick}
        >
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
