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
            <div className="w-screen bg-darkPurple">
                <div className={gridClasses}>
                    <div className="md:col-span-6">
                        <p className="font-display text-lightPink text-2xl mb-6">Usability test</p>
                        <p className="text-lg text-white mb-6">
                            <strong>We readjusted the flow.</strong> Having a pre-built design system saved us a lot of
                            time, so we decided to create high-quality wireframes for conducting a usability test.{" "}
                        </p>
                        <Image
                            className="my-10"
                            src="/usability-testing.png"
                            width={500}
                            height={300}
                            alt="Compara online website"
                        />
                        <p className="text-lg text-white mb-6">
                            Users liked the idea of autocomplete the car data as it made the process more expeditious.
                        </p>
                        <div className="flex items-center justify-center">
                            <div>
                                <Image src="/face3.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[240px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded relative">
                                    <p>
                                        <strong>Autocomplete car details would be very useful</strong>, especially if I
                                        want to quote for someone else and I don&#39;t know their details.
                                    </p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6">
                        <p className="text-lg text-white mb-6">
                            <strong>Objectives of the test: </strong>
                        </p>
                        <ol className="text-lg text-white list-disc pl-6">
                            <li>
                                Know if the information architecture was consistent with the user&#39;s mental model.
                            </li>
                            <li>Know how the user feel about data autocompletion.</li>
                        </ol>
                        <p className="text-lg text-white mb-6 mt-12">
                            <strong>Methodology: </strong>
                        </p>
                        <ol className="text-lg text-white list-disc pl-6">
                            <li>
                                <strong>Sample:</strong> 7 users belonging to the User Personas profiles: 4 with car
                                insurance experience and 3 without.
                            </li>
                            <li>
                                <strong>Procedure:</strong> Profiling questions, then they had to simulate a quote in
                                the interactive prototype, SUS test and closing questions.
                            </li>
                            <li>
                                <strong>Time:</strong> 30 minutes.
                            </li>
                        </ol>
                        <p className="text-lg text-white mb-6 my-12">
                            Users felt uncomfortable with autocomplete personal information (phone and email), because
                            they felt that it was invasive and/or that this data might not be up to date.
                        </p>
                        <div className="flex items-center justify-center">
                            <div>
                                <Image src="/face4.png" width={66} height={66} alt="face of a participant" />
                            </div>

                            <div>
                                <div className="w-[400px] ml-4 p-4 flex-1 bg-lighterPurple text-gray-800 p-2 rounded relative">
                                    <p>
                                        <strong>I would prefer to complete the email myself</strong> even if I have to
                                        type
                                    </p>

                                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-lighterPurple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 mt-12">
                        <p className="font-display text-lightPink text-2xl mb-6">
                            SUS results (System usability scale)
                        </p>
                        <p className="text-lg text-white mb-6">
                            The SUS (System Usability Scale) is a ten-item questionnaire administered to users to{" "}
                            <strong>measure their perceived ease of use.</strong>
                        </p>
                        <p className="text-lg text-white mb-6">
                            The test results were great. Which left us very happy and confident.
                        </p>
                    </div>
                    <div className="md:col-span-5 mt-12">
                        <table className="table-auto text-white w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2"></th>
                                    <th className="px-4 py-2 text-center">SUS Score</th>
                                    <th className="px-4 py-2 text-center">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="border-b-2 px-4 py-2">{user.name}</td>
                                        <td className="border-b-2 px-4 py-2 text-center">{user.score}</td>
                                        <td className="border-b-2 px-4 py-2 text-center">{user.grade}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className="border-b-2 px-4 py-2">Average</td>
                                    <td className="border-b-2 px-4 py-2 text-center">
                                        {Math.floor(
                                            (users.reduce((acc, user) => acc + user.score, 0) / users.length) * 100
                                        ) / 100}
                                    </td>
                                    <td className="border-b-2 px-4 py-2 text-center">A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
