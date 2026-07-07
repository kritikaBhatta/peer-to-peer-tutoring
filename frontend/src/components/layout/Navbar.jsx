import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-indigo-600"
        >
          PeerPrep
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

            <li>
              <Link to="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/tutor" className="hover:text-indigo-600 transition">
                Find Tutors
              </Link>
            </li>

            <li>
              <Link
                to="/become-tutor"
                className="hover:text-indigo-600 transition"
              >
                Become a Tutor
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-indigo-600 transition">
                About
              </Link>
            </li>

          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link to="/login">
            <Button variant="secondary">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button>
              Register
            </Button>
          </Link>
        </div>

      </div>
    </header>
  );
}