import Link from "next/link"
import {getServerSession} from 'next-auth/next'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


async function Navbar() {

  const session = await getServerSession(authOptions);
   console.log(session);

    return (
        <nav className="flex justify-between items-center bg-slate-400 ">
            <h1 className="font-bold hover:text-slate-500 m-4">App</h1>
            <ul className="flex space-x-4 m-4">

                {!session?.user ? (
                        <>
                         <li>
                    <Link href="/" className="hover:text-slate-500">Home</Link>
                </li>
                <li>
                    <Link href="/auth/login"className="hover:text-slate-500">Login</Link>
                </li>
                <li>
                    <Link href="/auth/register"className="hover:text-slate-500">Register</Link>
                </li>
                        </>
                    ):( 
                    <>
                        
                        <li>
                            <Link href="/dashboard"className="hover:text-slate-500">Dashboard</Link>
                        </li>
                            <li>
                            <Link href="/api/auth/signout"className="hover:text-slate-500">Logout</Link>
                        </li>
                        </>
                    )
                }
               
            </ul>
        </nav>
    )
}

export default Navbar;