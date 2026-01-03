import React, { useEffect, useState } from 'react';
import { checkAuth, getUserInfo } from '@/services/authService';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!checkAuth()) {
        setLoading(false);
        return;
      }

      const res = await getUserInfo();

      if (res.success) {
        setUserInfo(res.user);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading profile...</p>;
  }

  if (!userInfo) {
    return <p className="text-center py-20">No user data</p>;
  }

  return (
    <div className='flex flex-col py-16 max-w-6xl w-full px-6 pt-20 mx-auto'>
      <h2 className='text-3xl'>About You</h2>

      <div className='border-t border-gray-300 space-y-8 mt-5 pt-5'>
        <p>Name : <span>{userInfo.name}</span></p>
        <p>User ID : <span>{userInfo.id}</span></p>
        <p>Email Address : <span>{userInfo.email}</span></p>
      </div>
    </div>
  );
};

export default ProfilePage;
