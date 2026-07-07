export default function SearchBar() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-8 -mt-10 relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Subject (e.g. Calculus)"
                    className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                    type="text"
                    placeholder="University"
                    className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <select className="border rounded-xl px-4 py-3">
                    <option>Price</option>
                    <option>$10 - $20</option>
                    <option>$20 - $40</option>
                    <option>$40+</option>
                </select>

                <button className="bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-semibold">
                    Search Tutors
                </button>
            </div>
        </section>
    );
}