"use client"

import { NetflixTicket, plans } from "./page"

const netflixRed = "#e50914"

interface Step2Props {
    chosenPlan: string | null
    setChosenPlan: (plan: string | null) => void
    setStep: (step: number) => void
}

export default function Step2({ chosenPlan, setChosenPlan, setStep }: Step2Props) {
    return (
        <div className="max-w-[880px] mx-auto mt-8">
            <div className="mb-8">
                <p className="text-4xl text-bold mb-6">Choose the plan that&apos;s right for you</p>
                <div className="mb-1">
                    <NetflixTicket color={netflixRed} />
                    <span className="ml-2 text-lg align-middle">Watch all you want. Advert-free.</span>
                </div>
                <div className="mb-1">
                    <NetflixTicket color={netflixRed} />
                    <span className="ml-2 text-lg align-middle">Recommendations just for you.</span>
                </div>
                <div className="mb-1">
                    <NetflixTicket color={netflixRed} />
                    <span className="ml-2 text-lg align-middle">Change or cancel your plan at any time.</span>
                </div>
            </div>

            <div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th />
                            {plans.map((plan, index) => (
                                <th className="px-6 pb-4" key={index} onClick={() => setChosenPlan(plan.name)}>
                                    <div
                                        className={`text-center w-[120px] h-[120px] text-white ${
                                            chosenPlan !== plan.name && "opacity-50"
                                        }`}
                                        style={{ backgroundColor: netflixRed }}
                                    >
                                        <span className="leading-[120px]">{plan.name}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray">
                            <td className="text-left py-4 px-2">Monthly price</td>
                            {plans.map((plan, index) => (
                                <td
                                    className="text-center font-bold"
                                    key={index}
                                    style={{
                                        color: chosenPlan === plan.name ? netflixRed : "darkGray",
                                    }}
                                    onClick={() => setChosenPlan(plan.name)}
                                >
                                    NOK{plan.price}
                                </td>
                            ))}
                        </tr>
                        <tr className="border-b border-gray">
                            <td className="text-left py-4 px-2">Video quality</td>
                            {plans.map((plan, index) => (
                                <td
                                    className="text-center font-bold"
                                    key={index}
                                    style={{
                                        color: chosenPlan === plan.name ? netflixRed : "darkGray",
                                    }}
                                    onClick={() => setChosenPlan(plan.name)}
                                >
                                    {plan.quality}
                                </td>
                            ))}
                        </tr>
                        <tr className="border-b border-gray">
                            <td className="text-left py-4 px-2">Resolution</td>
                            {plans.map((plan, index) => (
                                <td
                                    className="text-center font-bold"
                                    key={index}
                                    style={{
                                        color: chosenPlan === plan.name ? netflixRed : "darkGray",
                                    }}
                                    onClick={() => setChosenPlan(plan.name)}
                                >
                                    {plan.resolution}
                                </td>
                            ))}
                        </tr>
                        <tr className="">
                            <td className="text-left py-4 px-2">Watch on your TV, computer, mobile phone and tablet</td>
                            {plans.map((plan, index) => (
                                <td
                                    className="text-center font-bold"
                                    key={index}
                                    onClick={() => setChosenPlan(plan.name)}
                                >
                                    <NetflixTicket color={chosenPlan === plan.name ? netflixRed : "darkGray"} />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-4 px-2">
                <p className="text-sm opacity-60">
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and
                    device capabilities. Not all content is available in all resolutions. See our Terms of Use for more
                    details. Only people who live with you may use your account.
                </p>
                <p className="text-sm opacity-60 mt-4 mb-6">
                    Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.
                </p>

                <button
                    className="block text-white m-auto w-[440px] p-4 rounded text-2xl hover:opacity-90"
                    style={{ backgroundColor: netflixRed }}
                    onClick={() => setStep(3)}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
