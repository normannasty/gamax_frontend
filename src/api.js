import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5070/api', 
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchUsers = (token) => {
    return API.get('/users', { headers: { Authorization: `Bearer ${token}` } });
};

export default API;