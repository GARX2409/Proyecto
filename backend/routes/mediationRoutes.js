const express = require('express');
const Mediation = require('../models/Mediation');
const router = express.Router();

// Crear mediación
router.post('/', async (req, res) => {
    const { studentName, title, description, typeOfIssue, location } = req.body;
    try {
        const mediation = new Mediation({ studentName, title, description, typeOfIssue, location });
        await mediation.save();
        res.status(201).json(mediation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Obtener mediaciones por estudiante
router.get('/:studentName', async (req, res) => {
    try {
        const mediations = await Mediation.find({ studentName: req.params.studentName });
        res.json(mediations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar estado
router.put('/:id', async (req, res) => {
    try {
        const mediation = await Mediation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(mediation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
