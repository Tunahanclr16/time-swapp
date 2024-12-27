const User = require('../models/user.model')

// Tüm kullanıcıları getir
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password') // Şifre hariç tüm bilgileri getir
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Kullanıcılar getirilirken hata oluştu',
            error: error.message
        })
    }
}

// Tek kullanıcı getir
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id, '-password')
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Kullanıcı bulunamadı'
            })
        }
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Kullanıcı getirilirken hata oluştu',
            error: error.message
        })
    }
}

const getProfile = async (req, res) => {
    console.log('Request User:', req.user); // Kullanıcı bilgilerini logla
    if (!req.user || !req.user.id) {
        return res.status(400).json({
            success: false,
            message: 'Geçersiz kullanıcı ID'
        });
    }

    try {
        const user = await User.findById(req.user.id, '-password'); // Şifreyi hariç tut
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Kullanıcı bulunamadı'
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error('Profil bilgileri getirilirken hata:', error); // Hata mesajını logla
        res.status(500).json({
            success: false,
            message: 'Profil bilgileri getirilirken hata oluştu',
            error: error.message // Hata mesajını döndür
        });
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    getProfile
} 