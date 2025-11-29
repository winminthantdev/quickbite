import React from 'react'
import { useLocation } from 'react-router';
import { checkAuth, getUserInfo } from '@/services/authService';

const ProfilePage = () => {

  const userInfo = checkAuth() ? getUserInfo()?.userinfo : null;

  
  return (
    <div className='flex flex-col py-16 max-w-6xl w-full px-6 pt-20 mx-auto'>
      <h2 className='text-3xl'>About You</h2>
      <div className='border-t border-gray-300 space-y-8 mt-5 pt-5'>
        <p>Name : <span>{userInfo.name}</span></p>
        <p>Customer ID : <span>{userInfo._id}</span></p>
        <p>Email Address : <span>{userInfo.email}</span></p>
        <p>Phone : <span>{userInfo.phone}</span></p>
        <p>Address : <span>{userInfo.address}</span></p>
      </div>
    </div>
  )
}

export default ProfilePage
