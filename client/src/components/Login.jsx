import React, { useState } from 'react'
import { loginUser } from '../services/api'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Login = ({ onClose }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await loginUser(email, password)
        console.log(res);
        
        if (res.success) {
            toast.success("Logged in successfully!")
            onClose?.()
        }else{
            toast.error(res.message)
        }
    }

    return (
        <div className='w-full h-screen absolute top-0 left-0 bg-black/10 flex justify-center items-center z-999'>
            <form className="relative max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white" onSubmit={handleSubmit}>
                <button type="button" className="absolute top-4 right-4 text-gray-500 hover:text-red-500 cursor-pointer transition" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
                <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>
                <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z" fill="#6B7280" /> </svg> 
                    <input type="email" placeholder="Email" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" onChange={e=>setEmail(e.target.value)} required />
                </div>
                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" fill="#6B7280" /> </svg> 
                    <input type="password" placeholder="Password" className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full" onChange={e=>setPassword(e.target.value)} required /> 
                </div>
                <div className="mt-5 text-left text-indigo-500">
                    <a className="text-sm" href="#">Forgot password?</a>
                </div>
                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-primary hover:opacity-90 transition-opacity cursor-pointer"> Login </button> 
                <p className="text-gray-500 text-sm mt-3 mb-4">Don’t have an account? <a className="text-indigo-500" href="#">Sign up</a></p> 
                <div className="text-gray-500 text-xs mb-3">
                    <div className='flex justify-between'>
                        <span>email : david@quickbite.com</span>
                        <span>password : test123</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Email : mrchan@quickbite.com</span>
                        <span>password : test123</span>
                    </div>
                </div>
            </form> 
        </div>
    )
}

export default Login
