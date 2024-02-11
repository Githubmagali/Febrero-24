"use client"
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


function LoginPage(){
    const router = useRouter()

    const [error, setError] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

       const formData = new FormData(e.currentTarget)

               
          const resNextAuth = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get("password"),
            redirect: false,
           })
           if(resNextAuth?.error) return setError(resNextAuth.error as string)


          if(resNextAuth?.ok) return router.push('/dashboard')


        console.log(resNextAuth)
          
    }

    return(
        <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col w-96 " onSubmit={handleSubmit}>
            
        {error && <div className='font-bold text-red-600 text-center'>{error}</div>}

        <h1 className="text-amber-500 hover:text-amber-600 font-bold mt-4 text-center">Login</h1>
            <input type="email" placeholder="Email" name="email"className="mt-3 px-3 border rounded"/>
            <input type="password" placeholder="Password" name="password" className="mt-3 px-3 border rounded" />
            <button className="mt-3 bg-yellow-400 rounded hover:bg-yellow-500">Send</button>
        </form>
    </div>
    )
}

export default LoginPage