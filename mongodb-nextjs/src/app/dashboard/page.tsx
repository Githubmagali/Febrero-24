"use client"
import { useSession } from "next-auth/react"

function DashboardPage(){
    const{ data: session, status} = useSession();

    console.log(session, status)

    return(
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-amber-500 hover:text-amber-600 font-bold mt-4 text-center">Dashboard </h1>
        </div>
    )
}

export default DashboardPage