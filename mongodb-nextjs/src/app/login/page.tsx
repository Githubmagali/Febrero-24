function LoginPage(){

    return(
        <div className="flex justify-center items-center h-screen">
        <form className="flex flex-col w-96 ">
        <h1 className="text-amber-500 hover:text-amber-600 font-bold mt-4 text-center">Login</h1>
            <input type="email" placeholder="Email" name="email"className="mt-3 px-3 border rounded"/>
            <input type="password" placeholder="Password" name="" className="mt-3 px-3 border rounded" />
            <button className="mt-3 bg-yellow-400 rounded hover:bg-yellow-500">Send</button>
        </form>
    </div>
    )
}

export default LoginPage