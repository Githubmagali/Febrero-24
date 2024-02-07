"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

function DashboardPage(){
    const router = useRouter();


    useEffect(()=>{
        const checkSession = async ()=>{
            const session = await getSession();
            if(!session){
                router.push('/auth/login');
            }
        };

        checkSession();
    }, [router])

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className='p-4 font-bold hover:text-slate-500'>  Dashboard</h1>
          
            <button className="bg-slate-400 px-4 py-2 rounded hover:bg-slate-500"
      onClick={() => signOut()} >Logout</button>
            </div>
    )
}

export default DashboardPage