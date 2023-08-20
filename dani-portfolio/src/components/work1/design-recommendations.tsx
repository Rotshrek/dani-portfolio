"use client"

export default function DesignRecommendation() {
    return (
        <div className="h-auto bg-[url('/hands-bg.png')] bg-cover w-full bg-center bg-no-repeat py-20">
            <div className="bg-white min-w-[400px] m-auto p-10 w-[50vw]">
                <p className="font-display text-2xl mb-6 text-center">Design recommendation</p>
                <p className="text-lg">
                    <strong>The car license plate should be the first question in the form.</strong>
                </p>
                <p className="text-lg">
                    We can use our database for <strong>autocomplete</strong> car information related inputs.
                </p>
                <p className="text-lg">
                    Also give the option to quote without a license plate for those users who prefer it.
                </p>
            </div>
        </div>
    )
}
