import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { LockKeyhole, Mail, Eye, EyeOff } from 'lucide-react';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword((password) => !password);
    }
    return (
        <div className="flex flex-col items-center  gap-20">
            <NavBar />
            <form className="flex flex-col border-gray-200 border-1 w-1/4 pt-5 pb-10 items-center gap-5 rounded-2xl shadow-2xl">
                <div className="flex flex-col items-center mt-7 gap-5">
                    <h1 className="font-bold text-2xl">Sign In</h1>
                    <p className="text-gray-500 font-semibold">Access your account</p>
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-600" >Email Address</p>
                    <div className="relative">
                        <input type="text" placeholder="sample@gmail.com" className="border-1 border-gray-400 w-full py-4 pl-9 rounded-xl focus:outline-none focus:border-blue-600 focus:border-2" />
                        <Mail className="absolute top-5 left-3 w-4 h-4 text-gray-500" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-md text-gray-600" >Password</p>
                    <div className="relative">
                        <input type={showPassword?"password":"text"} placeholder="sample123" className="border-1 border-gray-400 w-full py-4 pl-9 rounded-xl focus:outline-none focus:border-blue-600 focus:border-2" />
                        <LockKeyhole className="absolute top-5 left-3 w-4 h-4 text-gray-500" />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4.5 text-gray-500" /> : <EyeOff className="absolute right-3 top-4.5 text-gray-500" />} </p>
                    </div>
                </div>
                <div className="flex flex-row gap-35">
                    <div className="flex gap-2 rounded-xl py-4">
                        <input type="checkbox" name="" id="" className="h-5 w-5" />
                        <p className="font-semibold text-gray-600">Remember me</p>
                    </div>
                    <button className="border-1 border-white text-blue-600 font-semibold">Forgot password?</button>
                </div>
                <button className="w-[90%] bg-blue-600 py-4 text-white border-1 p-5 border-blue-700 rounded-xl font-semibold cursor-pointer flex justify-center hover:bg-blue-700 hover:shadow-2xl">Sign In</button>
                <div className="border-gray-100 w-[90%] mt-4 border-[0.5px]"></div>
                <p className="text-gray-700 font-semibold">Don't have an account?
                    <Link to='/SignUp' className="text-blue-600 cursor-pointer"> Create one here</Link>
                </p>
            </form>
        </div>
    )
}
export default SignIn