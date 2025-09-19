const SignUp = () => {
    return (
        <div className="flex flex-col items-center mt-7 gap-5">
            <h1 className="text-blue-600 text-3xl font-bold">Join BlogVerse</h1>
            <p className="text-gray-600 text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form className="flex flex-col border-gray-700 border-1 w-1/4 py-10 items-center gap-5 rounded-2xl">
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-700" >Full Name</p>
                    <input type="text" placeholder="Enter your Full Name" className="border-1 border-gray-500 w-full py-2 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-700" >Email ID</p>
                    <input type="text" placeholder="Enter your Email ID" className="border-1 border-gray-500 w-full py-2 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-700" >Password</p>
                    <input type="text" placeholder="Enter password" className="border-1 border-gray-500 w-full py-2 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-700" >Confirm Password</p>
                    <input type="text" placeholder="Confirm your password" className="border-1 border-gray-500 w-full py-2 px-3 rounded-xl focus:outline-none focus:border-purple-500" />
                    <div className="flex gap-2 rounded-xl justify-left items-center  py-4">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p>I agree to the Terms of Service & Privacy Policy</p>
                    </div>
                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white border-1 p-5 border-purple-900 rounded-xl cursor-pointer hover:bg-purple-800">Create Account</button>
                <div className="border-gray-100 w-[90%] mt-4 border-[0.5px]"></div>
                <p className="text-gray-700 font-semibold">Already have an Account?
                    <span className="text-purple-500 cursor-pointer"> SignIn here</span>
                </p>
                <button className=" text-gray-800 font-semibold hover:bg-gray-200 py-4 w-[90%] cursor-pointer rounded-xl">Back to Home</button>
            </form>

        </div>
    )
}
export default SignUp