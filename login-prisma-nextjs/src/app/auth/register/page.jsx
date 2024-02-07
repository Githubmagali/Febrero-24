"use client"
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const router = useRouter();


    const onSubmit = handleSubmit(async (data) => {

        if(data.password  !== data.repeatPassword){
            return alert ('Alert')
        }


        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(res.ok){
          router.push('/auth/login')
        }
    });
   


    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col w-96"
                action="" onSubmit={onSubmit}
            >
                <h1 className='text-center font-bold hover:text-slate-500'>Register</h1>
                <input type="text"
                    {...register("username", {
                        required: true,
                        message: 'Username is required'

                    })}
                    placeholder='Username'
                    className="mt-3 px-3 py-2 border rounded" />
                {
                    errors.username && (
                        <div className='text-red-500 '
                        >{errors.username.message}</div>
                    )
                }

                <input type="email"
                    {...register("email", {
                        required: true,
                        message: 'Email is required'

                    })}
                    placeholder='Email'
                    className="mt-3 px-3 py-2 border rounded" />
                {
                    errors.email && (
                        <div className='text-red-500 '
                        >{errors.email.message}</div>
                    )
                }

                <input type="password"
                    {...register("password", {
                        required: true,
                        message: 'Password is required'
                    })}
                    placeholder='Password'
                    className="mt-3 px-3 py-2 border rounded" />
                {
                    errors.password && (
                        <div className='text-red-500 '
                        >{errors.password.message}</div>
                    )
                }

                <input type="password"
                    {...register("repeatPassword", {
                        required: true,
                        message: 'Password is required'
                    })}
                    placeholder='Repeat password'
                    className="mt-3 px-3 py-2 border rounded" />
                {
                    errors.repeatPassword && (
                        <div className='text-red-500 '
                        >{errors.repeatPassword.message}</div>
                    )
                }
                <button className='mt-3 bg-slate-400 px-4 py-2 rounded hover:bg-slate-500'>
                    Register</button>
            </form>
        </div>
    )
}

export default RegisterPage