const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // Temel kullanıcı bilgileri
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^(\+90|0)?[0-9]{10}$/, 'Geçerli bir telefon numarası giriniz']
    },
    fullName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: 'default-avatar.png'
    },
    
    // Zaman Bankası özellikleri
    timeCredits: {
        type: Number,
        default: 5,
        min: 0
    },
    skills: [{
        type: String,
        trim: true
    }],
    
    // Konum ve iletişim bilgileri
    location: {
        city: String,
        district: String
    },
    about: {
        type: String,
        maxlength: 500
    },
    availability: [{
        type: String,
        enum: ['Hafta içi gündüz', 'Hafta içi akşam', 'Hafta sonu', 'Esnek']
    }],

    // Hesap durumu
    isActive: {
        type: Boolean,
        default: true
    },
    lastActive: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', userSchema, 'users')