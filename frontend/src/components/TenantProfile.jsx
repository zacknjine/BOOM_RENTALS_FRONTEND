import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TenantProfile = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserProfile(response.data);
            } catch (error) {
                setError('Error fetching profile: ' + error.response?.data?.detail || error.message);
            }
        };
        fetchProfile();
    }, []);

    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            {userProfile ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg mb-2"><strong>Username:</strong> {userProfile.username}</p>
                    <p className="text-lg mb-2"><strong>Email:</strong> {userProfile.email}</p>
                    {/* Add any other fields you want to display */}
                </div>
            ) : (
                <p className="text-gray-500">Loading...</p>
            )}
        </div>
    );
};

export default TenantProfile;
