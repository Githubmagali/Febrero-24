"use client"
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const router = useRouter()

    const [error, setError] = useState(null)

    const onSubmit = handleSubmit(async (data) => {

        const respuesta = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
        });


        if (respuesta.error) {
            setError(respuesta.error);
        } else {
            router.push('/dashboard')
            router.refresh()

        }
    });


    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col w-96"
                onSubmit={onSubmit}
            >
                {error && (
                    <div className='text-red-500 text-center'>{error}</div>
                )}
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
                {
                    errors.username && (
                        <div className='text-red-500 '
                        >{errors.username.message}</div>
                    )
                }

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
                {
                    errors.password && (
                        <div className='text-red-500 '
                        >{errors.password.message}</div>
                    )
                }
                <button className='mt-3 bg-slate-400 px-4 py-2 rounded hover:bg-slate-500'>
                    Register</button>
            </form>
        </div>
    )
}

export default LoginPage