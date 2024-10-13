'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EditProfile from '../../components/profile/EditProfile';
import Orders from '../../components/profile/Orders';
import Appointments from '../../components/profile/Appointments';
import DiscountCodes from '../../components/profile/DiscountCodes';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('edit');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log('ProfilePage mounted');
    const fetchUserData = async () => {
      console.log('Fetching user data');
      try {
        const response = await fetch('/api/profile/user/info', {
          credentials: 'include'
        });

        console.log('Response status:', response.status);
        if (response.ok) {
          const userData = await response.json();
          console.log('User data received:', userData);
          setUser(userData);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      }
    };

    fetchUserData();
  }, [router]);

  if (!user) {
    console.log('User not loaded, showing loading state');
    return <div>Loading...</div>;
  }

  console.log('Rendering profile page for user:', user.username);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-5">
          <h2 className="text-2xl font-semibold">{ user.username}</h2>
        </div>
        <nav className="mt-5">
          <a
            className={`block py-2 px-4 ${activeTab === 'edit' ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('edit')}
          >
            Edit Profile
          </a>
          <a
            className={`block py-2 px-4 ${activeTab === 'orders' ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </a>
          <a
            className={`block py-2 px-4 ${activeTab === 'appointments' ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </a>
          <a
            className={`block py-2 px-4 ${activeTab === 'discounts' ? 'bg-indigo-500 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('discounts')}
          >
            Discount Codes
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {activeTab === 'edit' && <EditProfile user={user} />}
        {activeTab === 'orders' && <Orders userId={user._id} />}
        {activeTab === 'appointments' && <Appointments userId={user._id} />}
        {activeTab === 'discounts' && <DiscountCodes userId={user._id} />}
      </div>
    </div>
  );
};

export default ProfilePage;