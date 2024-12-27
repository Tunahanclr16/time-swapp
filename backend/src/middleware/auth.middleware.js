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

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Token'ı al

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'gizli-anahtar');
        req.user = decoded; // Kullanıcı bilgilerini req.user'a ata
        next(); // Middleware'i geç
    } catch (error) {
        console.error('Token doğrulama hatası:', error); // Hata mesajını logla
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = authenticate;