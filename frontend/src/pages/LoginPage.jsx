import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', {
                username,
                password,
            });
            const user = response.data;

            if (user.role === 'Estudiante') history.push('/student');
            else if (user.role === 'Docente') history.push('/teacher');
            else if (user.role === 'Mediador') history.push('/mediator');
            else if (user.role === 'Admin') history.push('/admin');
        } catch (error) {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
};

export default LoginPage;
