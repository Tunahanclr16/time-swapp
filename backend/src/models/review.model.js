const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    // Değerlendirmeyi yapan kullanıcı
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Değerlendirilen kullanıcı
    reviewed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Hangi hizmet için yapıldı
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    // Değerlendirme detayları
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema) 