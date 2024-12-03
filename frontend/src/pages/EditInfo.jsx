import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditInfo = () => {
    const history = useHistory();
    const userId = localStorage.getItem('userId');
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [password, setPassword] = useState(localStorage.getItem('password'));

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/users/${userId}`, {
                username,
                password,
            });
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.password);
            alert('Información actualizada');
        } catch (error) {
            alert('Error al actualizar la información');
        }
    };

    return (
        <div>
            <h2>Editar Información Personal</h2>
            <input
                type="text"
                placeholder="Nuevo Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Nueva Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleUpdate}>Actualizar</button>
            <button onClick={() => history.push('/student')}>Regresar</button>
        </div>
    );
};

export default EditInfo;
