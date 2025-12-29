import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { loginUser } from '@/services/authService'
import Signup from './Signup'
import { registerUser } from '../../services/authService'

const Login = ({ onClose }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formState, setFormState] = useState('login');
    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault()

        const res = await loginUser(email, password)
        console.log(res);

        if (res.success) {
            toast.success("Logged in successfully!")
            onClose?.()
        } else {
            toast.error(res.message)
        }
    }


    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("Signup:",signupName, signupEmail, signupPassword);

        // TODO: call signup API here
        const res = await registerUser(signupName, signupEmail, signupPassword)

        console.log(res);

        if(res.success){
            toast.success("Registered successfully! Please Login");  
            setFormState("login"); 
        }else{
            toast.error(res.message)
        }

    };

    return (
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center z-999'>
            {formState === "login" && (
                <form className="relative max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white" onSubmit={handleLogin}>
                    <button type="button" className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer transition" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
                    <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
                    <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
                    <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
                        <input type="email" placeholder="Email" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                        <input type="password" placeholder="Password" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" onChange={e => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer"> Login </button>
                    <div className="mt-5 text-left text-indigo-500">
                        <a className="text-sm" href="#">Forgot password?</a>
                    </div>
                    <p className="text-gray-500 text-sm select-none mt-3 mb-8">Don’t have an account? <span className="cursor-pointer text-indigo-500" onClick={() => setFormState("signup")}>Sign up</span></p>
                </form>
            )}
            {/* ------------------ start show signup model ---------------- */}
            {formState === "signup" && (
                <form
                    className="relative max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
                    onSubmit={handleSignup}
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer transition"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    {/* Title */}
                    <h1 className="text-gray-900 text-3xl mt-10 font-medium">Register</h1>
                    <p className="text-gray-500 text-sm mt-2">Create your new account</p>

                    {/* Name */}
                    <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faUser} className='text-gray-500' />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className='text-gray-500' />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <FontAwesomeIcon icon={faLock} className='text-gray-500' />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        Register
                    </button>

                    {/* forgot */}
                    <div className="mt-5 text-left text-indigo-500">
                        <a className="text-sm" href="#">Forgot password?</a>
                    </div>

                    {/* Switch to Login */}
                    <p className="text-gray-500 text-sm select-none mt-3 mb-8">
                        Already have an account?{" "}
                        <span className="cursor-pointer text-indigo-500" onClick={() => setFormState("login")}>
                            Login
                        </span>
                    </p>
                </form>
            )}

            {/* ------------------ end show signup model ---------------- */}
        </div>
    )
}

export default Login
