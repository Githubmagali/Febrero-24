
function LoginPage(){
    return(
        <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-6 rounded shadow-md flex flex-col w-96"
            action="">
             <h1 className='text-center font-bold hover:text-neutral-500'>Login</h1>

            <input type="text"
                placeholder='Username'
                className="mt-3 px-3 py-2 border rounded"
                />
        
            <input type="email"
                placeholder='Email'
                className="mt-3 px-3 py-2 border rounded" />
            
         
            <input type="password"
                placeholder='Password'
                className="mt-3 px-3 py-2 border rounded" />
             
            <button className='mt-3 bg-neutral-400 px-4 py-2 rounded hover:bg-neutral-500'>
                Register</button>
        </form>
    </div>
    )
}

export default LoginPage