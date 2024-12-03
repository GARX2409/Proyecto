const mongoose = require('mongoose');

const MediationSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    typeOfIssue: { type: Number, required: true },
    location: { type: String, required: true },
    status: { type: String, enum: ['En proceso', 'Solucionada', 'Cancelada'], default: 'En proceso' },
});

module.exports = mongoose.model('Mediation', MediationSchema);
