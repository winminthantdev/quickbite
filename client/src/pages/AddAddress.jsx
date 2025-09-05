import React, { useState } from 'react'
import { assets } from '../assets/assets'

const InputField = (({ type, placeholder, name, handleChange, address })=>(
    <input type={type} name={name} id={name} className='w-full border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition px-2 py-2.5' value={address[name]} placeholder={placeholder} onChange={handleChange} required />
))

const AddAddress = () => {

    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: '',
    })

    const handleChange = (e) =>{
        const { name, value } = e.target;

        setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
        }))
    }

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        
    }

  return (
    <div className='container mx-auto mt-20 pb-20'>
      <p className="text-2xl md:text-3xl text-gray-500">Add Shipping<span className="font-semibold text-primary"> Address</span></p>
      <div className="flex flex-col reverse md:flex-row justify-center items-center space-x-8 space-y-8 mt-10">
        <div className="max-w-md felx-1">
            <form className='text-sm space-y-3 mt-6' action="" method='' onSubmit={onSubmitHandler}>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField type="text"  name="firstName" placeholder="First Name" handleChange={handleChange} address={address} />
                    <InputField type="text" name="lastName" placeholder="Last Name" handleChange={handleChange} address={address} />
                </div>
                <InputField type="email" name="email" placeholder="Email address" handleChange={handleChange} address={address} />
                <InputField type="text"  name="email" placeholder="Street" handleChange={handleChange} address={address} />

                <div className='grid grid-cols-2 gap-4'>
                    <InputField type="text"  name="city" placeholder="City" handleChange={handleChange} address={address} />
                    <InputField type="text" name="state" placeholder="State" handleChange={handleChange} address={address} />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <InputField type="number"  name="zipcode" placeholder="Zip Code" handleChange={handleChange} address={address} />
                    <InputField type="text" name="country" placeholder="Country" handleChange={handleChange} address={address} />
                </div>

                <InputField type="text" name="phone" placeholder="Phone" handleChange={handleChange} address={address} />

                <button type="submit" className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">Save address</button>


            </form>
        </div>
        <img src={assets.shipping_address} alt="add address" className="w-full md:w-[40%] mb-16 md:mr-16 md:mt-0" />
      </div>
    </div>
  )
}

export default AddAddress
