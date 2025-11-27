import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex flex-col py-16 max-w-6xl w-full px-6 pt-20 mx-auto'>
      <h2 className='text-3xl'>About You</h2>
      <div className='border-t border-gray-300 space-y-8 mt-5 pt-5'>
        <p>Name : <span></span></p>
        <p>Customer ID : <span></span></p>
        <p>Email Address : <span></span></p>
        <p>Phone : <span></span></p>
      </div>
    </div>
  )
}

export default ProfilePage
