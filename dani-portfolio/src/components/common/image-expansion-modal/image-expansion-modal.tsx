"use client"

import Image from "next/image"
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
    return (
        <div
            className={`${
                open ? "fixed" : "hidden"
            } top-0 left-0 bg-lightGray w-screen h-screen bg-opacity-90 flex justify-center items-center z-40`}
            onClick={onClick}
        >
            <div className="m-auto">
                {/* <Image className="m-auto max-w-screen" src={image} alt={alt} width={width} height={height} /> */}
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: alt,
                            src: image,
                            isFluidWidth: true,
                        },
                        largeImage: {
                            src: image,
                            width: width,
                            height: height,
                        },
                        enlargedImagePosition: "over",
                        isHintEnabled: false,
                        enlargedImageClassName: "max-w-none",
                    }}
                />
                <p className="text-center text-sm mt-8">Hover to zoom</p>
            </div>
        </div>
    )
}
