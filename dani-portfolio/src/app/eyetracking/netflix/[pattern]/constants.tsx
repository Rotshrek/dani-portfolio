export const netflixRed = "#e50914"

export interface Plan {
    name: string
    price: number
    quality: string
    resolution: string
}

export const plans: Plan[] = [
    {
        name: "Basic",
        price: 89,
        quality: "Good",
        resolution: "480p",
    },
    {
        name: "Standard",
        price: 119,
        quality: "Better",
        resolution: "1080p",
    },
    {
        name: "Premium",
        price: 159,
        quality: "Best",
        resolution: "4K+HDR",
    },
]
