import Button from "../common/Button";
import Container from "../common/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
              🎓 Trusted by university students
            </span>

            <h1 className="text-6xl font-extrabold mt-6 leading-tight">
              Learn Better.
              <br />
              Teach Better.
            </h1>

            <p className="mt-6 text-indigo-100 text-lg leading-8 max-w-lg">
              PeerPrep connects students with verified peer tutors to help
              you master difficult courses, prepare for exams, and build
              confidence.
            </p>

            <div className="flex gap-4 mt-10">
              <Button>Find a Tutor</Button>
              <Button variant="secondary">
                Become a Tutor
              </Button>
            </div>

            <div className="flex gap-10 mt-12">
              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-indigo-200">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">120+</h2>
                <p className="text-indigo-200">Tutors</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">4.9★</h2>
                <p className="text-indigo-200">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                  SC
                </div>

                <div>
                  <h3 className="text-gray-900 text-xl font-bold">
                    Sarah Chen
                  </h3>

                  <p className="text-gray-500">
                    Computer Science
                  </p>
                </div>

              </div>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
                  <span className="text-gray-500">Subject</span>
                  <span className="font-semibold text-gray-800">
                    Data Structures
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Rate</span>
                  <span className="font-semibold text-gray-800">
                    $18/hr
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-semibold text-yellow-500">
                    ⭐ 4.9
                  </span>
                </div>

              </div>

              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
                View Profile
              </button>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}