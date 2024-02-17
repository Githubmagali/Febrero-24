import Link from "next/link"

function Navbar() {

    return (
        <nav className="flex justify-between items-center bg-lime-100">
            <li className="list-none">
                <Link href="/" className="font-bold text-green-900 hover:text-lime-950 px-9">Home</Link>
            </li>
            <ul className="flex space-x-4 m-4 px-5">
                <li >
                    <Link href="/about" className="font-bold text-lime-700 hover:text-lime-950">About</Link>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar