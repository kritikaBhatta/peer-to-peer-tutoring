export default function Hero() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-semibold text-sm">
                        Trusted by 500+ students
                    </span>

                    <h1 className="mt-6 text-6xl font-extrabold leading-tight text-gray-900">
                        Learn smarter
                        <br />
                        with <span className="text-indigo-600">peer tutoring</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Connect with top student tutors on your campus.
                        Book sessions, get help, and ace your courses —
                        all in one place.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold">
                            Find a Tutor
                        </button>

                        <button className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50">
                            Become a Tutor
                        </button>
                    </div>

                    <div className="flex gap-8 mt-10 text-sm text-gray-600">
                        <span>✅ Free for students</span>
                        <span>✅ Verified tutors</span>
                        <span>✅ Flexible scheduling</span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <div className="flex justify-between items-center">

                        <div className="flex gap-4 items-center">

                            <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                                JD
                            </div>

                            <div>
                                <h3 className="font-bold text-xl">
                                    James D.
                                </h3>

                                <p className="text-gray-500">
                                    Computer Science • Senior
                                </p>
                            </div>

                        </div>

                        <span className="text-yellow-500 font-bold">
                            ⭐ 4.9
                        </span>

                    </div>

                    <div className="mt-8 space-y-5">

                        <div className="flex justify-between border rounded-xl p-4">
                            <span>Subject</span>
                            <strong>Data Structures</strong>
                        </div>

                        <div className="flex justify-between border rounded-xl p-4">
                            <span>Next Available</span>
                            <strong>Today, 3:00 PM</strong>
                        </div>

                        <div className="flex justify-between border rounded-xl p-4">
                            <span>Rate</span>
                            <strong>$20/hour</strong>
                        </div>

                    </div>

                    <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold">
                        Book Now
                    </button>

                </div>

            </div>
        </section>
    );
}