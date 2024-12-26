const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

// Token doğrulama middleware'i
const protect = async (req, res, next) => {
    try {
        let token

        // Token'ı header'dan al
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }

        // Token kontrolü
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Yetkilendirme token\'ı bulunamadı'
            })
        }

        try {
            // Token'ı doğrula
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Kullanıcıyı bul (şifre hariç)
            const user = await User.findById(decoded.id).select('-password')
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Geçersiz token'
                })
            }

            // Kullanıcı bilgisini request'e ekle
            req.user = user
            next()
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Geçersiz token'
            })
        }
    } catch (error) {
        console.error('Auth Middleware Error:', error)
        res.status(500).json({
            success: false,
            message: 'Sunucu hatası',
            error: error.message
        })
    }
}

module.exports = {
    protect
} 