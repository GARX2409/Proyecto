import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const StudentDashboard = () => {
    const history = useHistory();
    const [mediations, setMediations] = useState([]);
    const [userInfo, setUserInfo] = useState({ username: '', password: '' });

    const fetchMediations = async () => {
        const studentName = localStorage.getItem('username');
        const response = await axios.get(`http://localhost:5000/api/mediations/student/${studentName}`);
        setMediations(response.data);
    };

    const handleLogout = () => {
        localStorage.clear();
        history.push('/');
    };

    useEffect(() => {
        fetchMediations();
        setUserInfo({
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password'),
        });
    }, []);

    return (
        <div>
            <h2>Menu del Estudiante</h2>
            <button onClick={() => history.push('/student/info')}>Información Personal</button>
            <button onClick={() => history.push('/student/request-mediation')}>Solicitar Mediación</button>
            <button onClick={() => history.push('/student/mediations')}>Mediaciones Activas</button>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default StudentDashboard;
