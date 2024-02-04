"use client"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            return alert("Password do not match");
        }

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const dataJSON = await res.json();
            console.log(dataJSON);


        
            router.push("/auth/login");
        } catch (error) {
            console.error("Client error during registration:", error);
           
        }
    });
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md flex flex-col w-96"
                action=""
                onSubmit={onSubmit}>
                <h1 className='text-center font-bold hover:text-neutral-500'>Register</h1>
                <input type="text"
                    placeholder='Username'
                    className="mt-3 px-3 py-2 border rounded"
                    {...(register("username", {
                        required: {
                            value: true,
                            message: 'Username is required'
                        }
                    }))} />
                {
                    errors.username && (
                        <div className='text-red-500 '
                        >{errors.username.message}</div>
                    )
                }
                <input type="email"
                    placeholder='Email'
                    className="mt-3 px-3 py-2 border rounded"
                    {...(register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        }
                    }))} />
                {
                    errors.email && (
                        <div className='text-red-500 '
                        >{errors.email.message}</div>
                    )
                }
                <input type="password"
                    placeholder='Password'
                    className="mt-3 px-3 py-2 border rounded"
                    {...(register("password", {
                        required: {
                            value: true,
                            message: 'Password is required'
                        }
                    }))} />
                {
                    errors.password && (
                        <div className='text-red-500'
                        >{errors.password.message}</div>
                    )
                }
                <input type="password"
                    placeholder='Repeat password'
                    className="mt-3 px-3 py-2 border rounded"
                    {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: 'Confirm password is required'
                        }
                    })} />
                {
                    errors.confirmPassword && (
                        <div className='text-red-500 '
                        >{errors.confirmPassword.message}</div>
                    )
                }
                <button className='mt-3 bg-neutral-400 px-4 py-2 rounded hover:bg-neutral-500'>
                    Register</button>
            </form>
        </div>
    )
}

export default RegisterPage