import Link from "next/link"
import { getServerSession } from "next-auth"


async function Navbar() {

    const session = await getServerSession()

    return (

        <nav className="flex justify-between items-center bg-amber-100">
            <Link href="/" className="font-bold text-yellow-800 hover:text-yellow-950 px-6 cursor-pointer">Mongo DB</Link>
            <ul className="flex space-x-4 m-4 px-5">
                {session ? (
                    <>
                        <li>
                            <Link href="/dashboard" className="font-bold text-yellow-500 hover:text-yellow-800">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/api/auth/signout" className="font-bold text-yellow-500 hover:text-yellow-800">Signout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/login" className="font-bold text-yellow-500 hover:text-yellow-800">Login</Link>
                        </li>
                        <li>
                            <Link href="/register" className="font-bold text-yellow-500 hover:text-yellow-800">Register</Link>
                        </li>
                    </>

                )}
            </ul>

        </nav>
    )
}

export default Navbar