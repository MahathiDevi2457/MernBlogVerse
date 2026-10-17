import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { CircleUser, KeyRound, Eye, EyeOff } from 'lucide-react';
import { useAuth } from './context/AuthContext';

const SignUp = () => {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }));

        setError('');
        setSuccess('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError('');
        setSuccess('');

        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        }

        if (!formData.password) {
            newErrors.password = 'Please enter your password';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must contain at least 6 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Your passwords did not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setLoading(true);

            await register(
                formData.fullName.trim(),
                formData.email.trim(),
                formData.password
            );

            setSuccess('Your account has been created successfully!');

            navigate('/', { replace: true });
        } catch (err) {
            setError(
                err.message || 'Unable to create your account. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center flex-col gap-5">
            <NavBar />

            <h1 className="text-2xl text-blue-600 font-bold">
                Join BlogVerse
            </h1>

            <p className="text-sm md:text-xl text-gray-600 text-center font-semibold">
                Create your account and <br />
                start your Blogging journey today
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col border border-gray-400 w-[90%] sm:w-[50%] lg:w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl"
            >
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">
                        Full Name
                    </p>

                    <input
                        value={formData.fullName}
                        onChange={handleChange}
                        type="text"
                        name="fullName"
                        placeholder="Enter your Full Name"
                        className="border border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500"
                    />

                    {errors.fullName && (
                        <p className="text-red-500">{errors.fullName}</p>
                    )}
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">
                        Email
                    </p>

                    <input
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="border border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500"
                    />

                    {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                    )}
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">
                        Password
                    </p>

                    <div className="relative">
                        <input
                            value={formData.password}
                            onChange={handleChange}
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your Password"
                            className="pl-12 pr-12 border border-gray-700 w-full py-4 rounded-xl focus:outline-none focus:border-purple-500"
                        />

                        <KeyRound className="text-blue-500 absolute top-4 left-3" />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-4"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword
                                ? <Eye className="h-5 w-5" />
                                : <EyeOff className="h-5 w-5" />}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                    )}
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">
                        Confirm Password
                    </p>

                    <div className="relative">
                        <input
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Your Password"
                            className="pl-12 pr-12 border border-gray-700 w-full py-4 rounded-xl focus:outline-none focus:border-purple-500"
                        />

                        <KeyRound className="text-blue-500 absolute top-4 left-3" />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-4"
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                        >
                            {showConfirmPassword
                                ? <Eye className="h-5 w-5" />
                                : <EyeOff className="h-5 w-5" />}
                        </button>
                    </div>

                    {errors.confirmPassword && (
                        <p className="text-red-500">{errors.confirmPassword}</p>
                    )}
                </div>

                <div className="flex gap-2 border border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input
                        type="checkbox"
                        id="terms"
                        required
                        className="h-5 w-5"
                    />

                    <label htmlFor="terms">
                        I agree to the Terms of Service and Privacy Policy
                    </label>
                </div>

                {error && (
                    <p className="text-red-500 w-[90%] text-center">
                        {error}
                    </p>
                )}

                {success && (
                    <p className="text-green-500 w-[90%] text-center">
                        {success}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-[90%] flex justify-center items-center bg-purple-500 py-4 text-white rounded-xl font-semibold gap-3 disabled:opacity-60"
                >
                    <CircleUser className="h-7 w-7" />
                    <span>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </span>
                </button>

                <div className="border border-gray-400 w-[90%] mt-4" />

                <p className="text-gray-700 font-semibold text-center">
                    Already have an Account?
                    <Link to="/login" className="text-purple-500">
                        {' '}Sign In here
                    </Link>
                </p>

                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer"
                >
                    Back to Home
                </button>
            </form>
        </div>
    );
};

export default SignUp;
