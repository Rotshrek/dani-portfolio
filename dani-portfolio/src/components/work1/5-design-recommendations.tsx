"use client"

export default function DesignRecommendation() {
    return (
        <div className="h-auto bg-[url('/hands-bg.png')] bg-cover w-full bg-center bg-no-repeat py-20">
            <div className="bg-white w-full max-w-[572px] m-auto py-12 px-20 rounded">
                <p className="font-bold text-2xl mb-4 text-center">Design recommendation</p>
                <p className="text-md mb-2">The car license plate should be the first question in the form.</p>
                <p className="text-md mb-2">We can use our database for autocomplete car information related inputs.</p>
                <p className="text-md mb-2">
                    Also give the option to quote without a license plate for those users who prefer it.
                </p>
            </div>
        </div>
    )
}
