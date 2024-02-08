"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

function Navbar() {

    const { data: session } = useSession()
    return (
        <nav className="bg-yellow-100 flex justify-between md:px-40 md:py-2">
            <Link href="/">
                <h1 className="text-xl font-extrabold p-3 text-yellow-900 hover:text-yellow-950">Google</h1></Link>

            {session?.user ? (
                <>
                    <div className="flex gap-x-4 py-5">
                        <Link href="/dashboard" className="ml-4 hover:text-yellow-800">Dashboard</Link>
                        <p className="hover:text-yellow-800">{session.user.name} {session.user.email}</p>
                        <img src={session.user.image} className="w-10 h-10 rounded-full" />
                        <button className="bg-yellow-500 hover:bg-yellow-800 px-3 mx-4 py-2 rounded-md"
                            onClick={async () => { await signOut() }}> Logout</button>
                    </div>
                </>

            ) : (
                <button className="bg-yellow-500 hover:bg-yellow-800 px-3 mx-4 py-2 rounded-md"
                    onClick={() => {
                        signIn()
                    }}>Sign In</button>

            )}



        </nav>
    )
}

export default Navbar