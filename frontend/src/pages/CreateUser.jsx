import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Estudiante');

    const handleCreate = async () => {
        try {
            await axios.post('http://localhost:5000/api/users', { username, password, role });
            alert('Usuario creado exitosamente');
            history.push('/admin');
        } catch (error) {
            alert('Error al crear usuario');
        }
    };

    return (
        <div>
            <h2>Crear Nuevo Usuario</h2>
            <input
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Estudiante">Estudiante</option>
                <option value="Docente">Docente</option>
                <option value="Mediador">Mediador</option>
                <option value="Admin">Admin</option>
            </select>
            <button onClick={handleCreate}>Crear Usuario</button>
            <button onClick={() => history.push('/admin')}>Regresar</button>
        </div>
    );
};

export default CreateUser;
