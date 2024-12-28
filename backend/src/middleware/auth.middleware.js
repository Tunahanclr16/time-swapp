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

// auth.middleware.js

// JWT (JSON Web Token) doğrulama middleware'i
const authenticate = (req, res, next) => {
    // İstek başlıklarından 'Authorization' başlığını al ve token'ı ayır
    // Örneğin: "Bearer <token>" şeklinde bir başlık varsa, bu satır token'ı alır
    const token = req.headers.authorization?.split(' ')[1]; // Token'ı al

    // Eğer token yoksa, 401 Unauthorized hatası döndür
    if (!token) {
        return res.status(401).json({ success: false, message: 'Token is required' });
    }

    try {
        // Token'ı doğrula ve decode et
        // 'jwt.verify' fonksiyonu, token'ı ve gizli anahtarı alır
        // Eğer token geçerliyse, decode edilmiş kullanıcı bilgilerini döndürür
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'gizli-anahtar');
        
        // Decode edilmiş kullanıcı bilgilerini req.user'a ata
        // Bu, sonraki middleware veya route handler'larında kullanılmak üzere kullanıcı bilgilerini saklar
        req.user = decoded; // Kullanıcı bilgilerini req.user'a ata
        
        // Middleware'i geç ve bir sonraki işleme devam et
        next(); // Middleware'i geç
    } catch (error) {
        // Eğer token geçersizse veya doğrulama sırasında bir hata oluşursa
        console.error('Token doğrulama hatası:', error); // Hata mesajını logla
        
        // 401 Unauthorized hatası döndür
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

// Middleware'i dışa aktar
module.exports = authenticate;