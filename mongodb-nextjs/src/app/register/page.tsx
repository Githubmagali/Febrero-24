"use client"
import axios, {AxiosError} from 'axios'
import { FormEvent, useState } from 'react'


function RegisterPage(){

    const [error, setError] = useState()

    const handleSubmit= async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

       const formData = new FormData(e.currentTarget)
       try{
        const res =  await axios.post('/api/auth/signup',{
            email: formData.get('email'),
            password: formData.get('password'),
            fullname: formData.get('fullname')
           })
           console.log(res)

       }catch(error){
        console.log(error)
          if(error instanceof AxiosError){
            setError(error.response?.data.message)
          }
       }

    }

    return(
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col  w-96 " onSubmit={handleSubmit}>
                {error && <div className='font-bold text-red-600 text-center'>{error}</div>}
            <h1 className="text-amber-500 hover:text-amber-600 font-bold mt-4 text-center">Register</h1>
                <input type="text" placeholder="Fullname" name="fullname" className="mt-3 px-3 border rounded"/>
                <input type="email" placeholder="Email" name="email"className="mt-3 px-3 border rounded"/>
                <input type="password" placeholder="Password" name="password" className="mt-3 px-3 border rounded" />
                <button className="mt-3 bg-yellow-400 rounded hover:bg-yellow-500">Send</button>
            </form>
        </div>
    )
}

export default RegisterPage