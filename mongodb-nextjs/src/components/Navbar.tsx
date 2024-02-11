import Link from "next/link"

function Navbar() {

    return (
        <nav className="flex justify-between items-center bg-amber-100">
            <h1 className="font-bold text-yellow-400 hover:text-yellow-500 px-6">App</h1>
            <ul className="flex space-x-4 m-4 px-5">
                <li>
                    <Link href="/login" className="font-bold text-yellow-500 hover:text-yellow-600">Login</Link>
                </li>
                <li>
                    <Link href="/register" className="font-bold text-yellow-500 hover:text-yellow-600">Register</Link>
                </li>
                <li>
                    <Link href="/dashboard" className="font-bold text-yellow-500 hover:text-yellow-600">Dashboard</Link>
                </li>
                <li>
                    <Link href="/api/auth/signout" className="font-bold text-yellow-500 hover:text-yellow-600">Logout</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar