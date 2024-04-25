import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';

function Dashboard() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:5070/api/Auth/userdata', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUserData(response.data);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                }
            }
        };

        fetchUserData();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            {userData.length > 0 ? (
                <div>
                    <p>Welcome back!</p>
                    <p>Here are the users that you can see:</p>
                    <ul>
                        {userData.map((user, index) => (
                            <li key={index}>
                                <p>Name: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Role: {user.role}</p>
                            </li>
                        ))}
                    </ul>
                    <LogoutButton />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;


