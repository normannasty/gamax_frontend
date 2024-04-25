import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to Our Application</h1>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<ProtectedRoute />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}


function ProtectedRoute() {
    const token = localStorage.getItem('token');
    if (!token) {
        
        return <Navigate to="/login" />;
    }
    return <Dashboard />;
}

export default App;






