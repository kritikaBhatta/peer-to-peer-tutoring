import{Link} from 'react-router-dom';
export default function Navbar() {
    return(
        <nav className='bg-white shadow-sm border-b border-gray-200'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
                    <Link to="/" className='text-2xl font-bold text-indigo-600'>peerprep</Link>

                <ul className='flex items-center gap-8'>
                    <li>
                        <Link to="/" className='hover:text-indigo-600'>Home</Link>
                    </li>

                    <li>
                        <Link to="/tutor" className='hover:text-indigo-600'>Find Tutor</Link>
                    </li>

                    <li>
                        <Link to="/become-tutor" className='hover:text-indigo-600'>Become a Tutor</Link>
                    </li>

                    <li>
                        <Link to="/about" className='hover:text-indigo-600'>About</Link>
                    </li>
                </ul> 


                {/* buttons */}

                <div className='flex gap-3'>
                    <Link to="/login">
                        <button className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50">Login</button>
                    </Link>

                    <Link to="/register">
                        <button className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50">Register</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
