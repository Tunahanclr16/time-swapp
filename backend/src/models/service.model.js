const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    // Hizmeti veren kullanıcı
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    // Hizmet kategorisi
    category: {
        type: String,
        required: true,
        enum: [
            'Web Geliştirme',
            'Mobil Uygulama',
            'Grafik Tasarım',
            'Dijital Pazarlama',
            'Video Düzenleme',
            'Yazı & Çeviri',
            'Müzik & Ses',
            'Eğitim & Danışmanlık'
        ]
    },
    // Saatlik kredi miktarı
    creditPerHour: {
        type: Number,
        required: true,
        min: 1
    },
    // Hizmet durumu
    status: {
        type: String,
        enum: ['active', 'inactive', 'completed'],
        default: 'active'
    },
    // Hizmet görselleri
    images: [{
        type: String
    }],
    // Konum bilgisi
    location: {
        type: String,
        enum: ['online', 'in-person', 'both'],
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Service', serviceSchema) 