import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function UserProfile() {
    const { user } = useContext(UserContext); // Access user data from UserContext

    return (
        <div className=" min-h-screen mb-20 ">
        <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex mt-10">
                <div className="md:flex-shrink-0">
                    {/* Display user avatar */}
                    <img className="h-48 w-full object-cover md:w-48" src="/user1.png" alt="User Avatar" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
                    {/* Display user data */}
                    <div className="mt-4">
                        <div className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</div>
                        <div className="text-gray-500">{user.email}</div>
                        <div className="text-gray-500">{user.role}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
