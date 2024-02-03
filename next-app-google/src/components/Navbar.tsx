"use client"
import Link from "next/link"
import { signIn, useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

function Navbar(){

    const {data : session}= useSession()
    const router = useRouter();
    console.log(session)

    return(
        <nav className="bg-slate-300 flex justify-between px-40">
          <Link href="/">Google</Link> 

          {session?.user ?(
             <div>
             <Link href="/dashboard">Dashboard</Link>
            <p>{session.user.name} {session.user.email}</p>
            <img src={session.user.image} className="w-10 h-10 rounded-full cursor-pointer"/>
            <button onClick={async ()=>{
                await signOut()
                router.push('/')}}>Logout</button>
         </div>

          ):
          (
            <button className="bg-slate-400 px-3 mx-4 py-2 rounded-md" onClick={()=>signIn()}>Sign in</button>
          )}
           
           
        </nav>
    )
}
export default Navbar