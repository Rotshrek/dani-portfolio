import Image from "next/image"

const starsAmount = 12,
  baseSize = 120,
  colors = ["white", "pink", "cyan"]

const generateStarts = () => {
  const stars = []

    for (let i = 0; i < starsAmount; i++) {
      const starSize = baseSize + Math.random() * baseSize,
        starColor = colors[Math.floor(Math.random() * colors.length)]

        stars.push(
            <div
                key={i}
                className="absolute opacity-40 animate-spin"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 20}s`,
                }}
            >
              <Image src={`/${starColor}-star.svg`} alt="star" width={starSize} height={starSize} />
            </div>
        )
    }

    return stars
}

export default function Home() {
    

    return (
        <main className="bg-gradient-to-b from-pink to-purple flex h-screen">
            <div className="text-white m-auto w-fit text-center">
                <p>Hi there, I'm</p>
                <p className="font-serif text-6xl my-4">Dani Fernández</p>
                <p>Product designer</p>
                <p>6 years into designing digital experiences</p>
            </div>
            <div className="absolute h-screen w-screen overflow-hidden">{generateStarts()}</div>
        </main>
    )
}
