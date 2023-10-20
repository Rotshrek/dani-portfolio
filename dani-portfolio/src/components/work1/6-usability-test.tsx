"use client"

import Image from "next/image"

const users = [
    {
        name: "User 1",
        score: 97.5,
        grade: "A",
    },
    {
        name: "User 2",
        score: 92.5,
        grade: "A",
    },
    {
        name: "User 3",
        score: 95,
        grade: "A",
    },
    {
        name: "User 4",
        score: 92.5,
        grade: "A",
    },
    {
        name: "User 5",
        score: 100,
        grade: "A",
    },
    {
        name: "User 6",
        score: 97.5,
        grade: "A",
    },
    {
        name: "User 7",
        score: 80,
        grade: "B",
    },
]

export default function UsabilityTest({ gridClasses }: { gridClasses: string }) {
    return (
        <div>
            <div className="w-screen">
                <div className={gridClasses}>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-2xl mb-6">Usability test</p>
                        <p className="text-md mb-6">
                            We readjusted the flow. Having a pre-built design system saved us a lot of time, so we
                            decided to create high-quality wireframes for conducting a usability test.
                        </p>
                        <Image
                            className="my-10 rounded-lg"
                            src="/work1/usability-testing.jpg"
                            width={577}
                            height={267}
                            alt="Compara online website"
                        />
                        <video className="m-auto mb-8 rounded-lg" autoPlay muted loop width={880} height={524}>
                            <source src="/work1/usability-test-video.mov" type="video/mp4" />
                        </video>
                        <p className="text-md mb-2 font-bold">Test goals:</p>
                        <ol className="text-md list-disc pl-6 list-decimal">
                            <li>
                                Know if the information architecture was consistent with the user&#39;s mental model.
                            </li>
                            <li>Know how the user feel about data autocompletion.</li>
                        </ol>
                        <p className="text-md mb-2 mt-6 font-bold">Methodology:</p>
                        <ol className="text-md list-disc pl-6">
                            <li>
                                Sample: 7 users belonging to the User Personas profiles: 4 with car insurance experience
                                and 3 without.
                            </li>
                            <li>
                                Procedure: Profiling questions, then they had to simulate a quote in the interactive
                                prototype, SUS test and closing questions.
                            </li>
                            <li>Time: 30 minutes.</li>
                        </ol>
                        <p className="text-md mb-2 mt-6">The main conclusions of this survey were:</p>
                        <ol className="text-md list-disc pl-6">
                            <li>
                                Users liked the idea of autocomplete the car data as it made the process more
                                expeditious.
                            </li>
                            <li>
                                Users felt uncomfortable with autocomplete personal information (phone and email),
                                because they felt that it was invasive and/or that this data might not be up to date.
                            </li>
                        </ol>
                    </div>
                    <div className="md:col-span-7">
                        <div className="flex items-center justify-center">
                            <div>
                                <Image src="/work1/face3.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[300px] ml-4 p-6 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>
                                        <strong>Autocomplete car details would be very useful,</strong> especially if I
                                        want to quote for someone else and I don&#39;t know their details.
                                    </p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 mt-2">
                        <div className="flex items-center justify-center">
                            <div>
                                <Image src="/work1/face4.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[260px] ml-4 p-6 flex-1 bg-lighterPurple text-gray-800 p-2 rounded-lg relative">
                                    <p>
                                        <strong>I would prefer to complete the email myself </strong>even if I have to
                                        type
                                    </p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 hidden md:block" />
                    <div className="md:col-span-8">
                        <p className="font-bold text-2xl mt-6 mb-6">SUS test</p>
                        <p className="text-md mb-2">
                            The SUS (System Usability Scale) is a ten-item questionnaire administered to users to{" "}
                            measure their perceived ease of use.
                        </p>
                        <p className="text-md mb-8">
                            The test results were great. Which left us very happy and confident.
                        </p>
                        <table className="table-auto w-2/3 min-w-[270px] m-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2"></th>
                                    <th className="px-4 py-2 text-center">SUS SCORE</th>
                                    <th className="px-4 py-2 text-center">SCORE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className={`${index < users.length - 1 ? "border-b-2" : ""} px-4 py-2`}>
                                            {user.name}
                                        </td>
                                        <td
                                            className={`${
                                                index < users.length - 1 ? "border-b-2" : ""
                                            } px-4 py-2 text-center`}
                                        >
                                            {user.score}
                                        </td>
                                        <td
                                            className={`${
                                                index < users.length - 1 ? "border-b-2" : ""
                                            } px-4 py-2 text-center`}
                                        >
                                            {user.grade}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="px-2 py-3 text-lg text-blue">FINAL SCORE</td>
                                    <td className="px-4 py-3 text-center text-lg text-blue">
                                        {Math.floor(
                                            (users.reduce((acc, user) => acc + user.score, 0) / users.length) * 100
                                        ) / 100}
                                    </td>
                                    <td className="px-2 py-3 text-center text-lg text-blue">A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
