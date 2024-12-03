import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RequestMediation = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [typeOfIssue, setTypeOfIssue] = useState(1);
    const [location, setLocation] = useState('Popular');
    const studentName = localStorage.getItem('username');

    const handleRequest = async () => {
        try {
            await axios.post('http://localhost:5000/api/mediations', {
                studentName,
                title,
                description,
                typeOfIssue,
                location,
            });
            alert('Mediación solicitada exitosamente');
            history.push('/student');
        } catch (error) {
            alert('Error al solicitar mediación');
        }
    };

    return (
        <div>
            <h2>Solicitar Mediación</h2>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
                type="number"
                placeholder="Tipo de Falta"
                value={typeOfIssue}
                onChange={(e) => setTypeOfIssue(Number(e.target.value))}
            />
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="Popular Modelo">Popular Modelo</option>
                <option value="Sede Central">Sede Central</option>
                <option value="José María Calvache">José María Calvache</option>
                <option value="Luis Fernando Vallejo">Luis Fernando Vallejo</option>
            </select>
            <button onClick={handleRequest}>Enviar Solicitud</button>
            <button onClick={() => history.push('/student')}>Regresar</button>
        </div>
    );
};

export default RequestMediation;
