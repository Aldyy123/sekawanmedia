"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { users } from '@/data/user';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter();

    const handleLogin = async () => {
        if (email === '' || password.length < 8) {
            alert('Email dan password tidak valid.');
            return;
        }

        const user = users.filter(user => {
            if (user.email == email && user.password == password) {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }
        })

        if (user.length === 0) {
            alert('Email dan password tidak valid atau user tidak ditemukan');
            return;
        }

        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-sm w-full rounded-md px-5 py-10 bg-white space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-center md:text-3xl text-lg font-extrabold text-gray-900">Log in to Dashboard</h2>
                    <p className="text-gray-400 text-sm md:text-base">Enter your email and password below</p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        <div className="my-5">
                            <label htmlFor="email-address" className="text-gray-400 font-semibold text-sm">
                                Email
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <div className="text-gray-400 flex justify-between">
                                <label htmlFor="password" className="text-gray-400 font-semibold text-sm">
                                    Password
                                </label>
                                <Link href="/" className="text-sm">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={`${showPassword ? 'text' : 'password'}`}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none focus:-z-0 pr-10 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="z-1 absolute top-2 right-2">
                                    {showPassword ? (
                                        <AiOutlineEye size={25} className="text-gray-500" />
                                    ) : (
                                        <AiOutlineEyeInvisible size={25} className="text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="group relative shadow w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>

                        <p className="text-gray-400 text-center mt-10 text-sm">
                            <span>Dont have an account? </span>
                            <Link href="/" className="text-blue-600 font-semibold">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
