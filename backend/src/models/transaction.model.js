const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    // Hizmeti veren kullanıcı
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Hizmeti alan kullanıcı
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // İlgili hizmet
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    // Harcanan zaman (saat)
    hours: {
        type: Number,
        required: true,
        min: 0.5 // Minimum 30 dakika
    },
    // İşlem durumu
    status: {
        type: String,
        enum: ['pending', 'accepted', 'completed', 'cancelled'],
        default: 'pending'
    },
    // Randevu tarihi ve saati
    appointmentDate: {
        type: Date,
        required: true
    },
    // İşlem notları
    notes: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Transaction', transactionSchema) 