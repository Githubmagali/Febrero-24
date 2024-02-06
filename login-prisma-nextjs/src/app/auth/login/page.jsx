"use client"

import { useForm } from 'react-hook-form';

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm()


    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col w-96" 
            >

                <h1 className='text-center font-bold hover:text-slate-500'>Login</h1>
                <input type="email"
                 {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required"
                    },
                })}
                    placeholder='Email'
                    className="mt-3 px-3 py-2 border rounded"
                />

                <input type="password"
                  {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    },

                })}
                    placeholder='Password'
                    className="mt-3 px-3 py-2 border rounded"
                />
                <button className='mt-3 bg-slate-400 px-4 py-2 rounded hover:bg-slate-500'>
                    Register</button>
            </form>
        </div>
    )
}

export default LoginPage