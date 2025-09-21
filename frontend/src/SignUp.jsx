import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import { useState } from "react";
import { CircleUser, LockKeyhole, Mail, UserRound, Eye, EyeOff } from 'lucide-react';
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleSubmit = (event) => {
        event.preventDefault();

        let newErrors = {}

        if (!formData.fullName) {
            newErrors.fullName = "Please enter your full name"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "Please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        }
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Your password didn't match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }
        else {
            setSuccess("Your account has been created successfully!")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("Please fill all the fields")
        // }
        // else if (formData.password !== formData.confirmPassword) {
        //     setError("The passwords didn't match")
        // }
        // else {
        //     setSuccess("Your account is created successfully!")
        //     setError("")

        // }
    }
    const handlePassword = () => {
        setShowPassword((password) => !password);
    }
    const handleConfirmPassword = () => {
        setShowConfirmPassword((confirmPassword) => !confirmPassword);

    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
        setError("")
        setSuccess("")
        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }

    return (
        <div className="flex flex-col items-center gap-5 ">
            <NavBar />
            <h1 className="text-blue-600 text-xl md:text-4xl font-bold">Join BlogVerse</h1>
            <p className="text-gray-600 text-sm md:text-xl text-center font-semibold">Create your account and <br></br>start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-gray-200 border-1 w-[70%] md:w-1.5/3 py-10 items-center gap-2.5 md:gap-5 rounded-2xl shadow-2xl">
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-sm md:text-md text-gray-700" >Full Name</p>
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            placeholder="Enter your Full Name"
                            className="border-1 border-gray-400 text-xs md:text-lg w-full py-2 pl-8 rounded-xl focus:outline-none focus:border-purple-500 focus:border-2" />
                        <UserRound className="absolute top-2.5 left-3  md:top-3 md:left-3 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-sm md:text-md text-gray-700" >Email ID</p>
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your Email ID"
                            name="email"
                            value={formData.email}
                            className="border-1 border-gray-400 text-xs md:text-lg w-full py-2 pl-8 rounded-xl focus:outline-none focus:border-purple-500 focus:border-2" />
                        <Mail className="absolute top-2.5 left-3 md:top-3.5 md:left-3 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[90%] ">
                    <p className="font-semibold text-sm md:text-md text-gray-700" >Password</p>
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            type={showPassword ? "password" : "text"}
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            className="border-1 border-gray-500 text-xs md:text-lg w-full py-2 pl-8 rounded-xl focus:outline-none focus:border-purple-500 focus:border-2" />

                        <LockKeyhole className="absolute top-2.5 left-3  md:top-3.5 md:left-3 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute h-4 w-4 md:h-6 md:w-6 right-3 top-2.5 text-gray-400" /> : <EyeOff className="absolute h-4 w-4 md:h-6 md:w-6 right-3 top-2.5 text-gray-500" />} </p>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                </div>
                <div className="flex flex-col gap-2 w-[90%]">
                    <p className="font-semibold text-sm md:text-md text-gray-700" >Confirm Password</p>
                    <div className="relative">
                        <input
                            onChange={handleChange}
                            type={showConfirmPassword ? "password" : "text"}
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            className="border-1 border-gray-500 text-xs md:text-lg w-full py-2 pl-8 rounded-xl focus:outline-none focus:border-purple-500 focus:border-2" />
                        <LockKeyhole className="absolute top-2.5 left-3  md:top-3.5 md:left-3 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" />
                        <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute h-4 w-4 md:h-6 md:w-6 right-3 top-2.5 text-gray-400" /> : <EyeOff className="absolute h-4 w-4 md:h-6 md:w-6 right-3 top-2.5 text-gray-500" />}</p>
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
                    </div>

                </div>
                <div className="flex gap-2 rounded-xl justify-left items-center  mx-3 py-4">
                    <input type="checkbox" name="" id="" className="h-3 w-3 md:h-5 md:w-5" />
                    <p className="text-xs md:text-xl">I agree to the Terms of Service & Privacy Policy</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}

                <button className="w-[70%] md:w-[90%] bg-purple-500 text:xs py-2 md:py-4 md:text-lg text-white border-1 p-5 border-purple-600 rounded-xl cursor-pointer hover:bg-purple-600 relative"><p className="flex justify-center font-semibold gap-3 ">Create Account</p></button>
                <div className="border-gray-100 w-[90%] mt-4 border-[0.5px]"></div>
                <p className="text-gray-700 text-xs md:text-lg font-semibold">Already have an Account?
                    <Link to="/Signin" className="text-purple-500 cursor-pointer"> SignIn here</Link>
                </p>
                <Link to="/Home" className=" text-gray-800 text-sm md:text-xl font-semibold flex justify-center hover:bg-gray-200 py-4 w-[90%] cursor-pointer rounded-xl">Back to Home</Link>
            </form>

        </div>
    )
}
export default SignUp 