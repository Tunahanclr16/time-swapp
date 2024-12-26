const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// JWT token oluşturma fonksiyonu
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'gizli-anahtar', {
        expiresIn: '30d'
    })
}

// Register işlemi
const register = async (req, res) => {
    try {
        console.log('Register isteği geldi:', req.body);
        console.log('Yüklenen dosya:', req.file);

        const { 
            username, 
            email, 
            password, 
            confirmPassword,
            phoneNumber, 
            fullName
        } = req.body

        // Gerekli alanları kontrol et
        if (!username || !email || !password || !confirmPassword || !phoneNumber || !fullName) {
            return res.status(400).json({
                success: false,
                message: 'Lütfen tüm zorunlu alanları doldurun'
            })
        }

        // Şifre eşleşme kontrolü
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Şifreler eşleşmiyor'
            })
        }

        // Şifre uzunluk kontrolü
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: 'Şifre en az 6 karakter olmalıdır'
            })
        }

        // Email formatını kontrol et
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Geçerli bir email adresi girin'
            })
        }

        // Telefon numarası formatını kontrol et
        const phoneRegex = /^(\+90|0)?[0-9]{10}$/
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({
                success: false,
                message: 'Geçerli bir telefon numarası girin (5xxxxxxxxx)'
            })
        }

        // Kullanıcı var mı kontrol et
        const userExists = await User.findOne({
            $or: [
                { email: email.toLowerCase() },
                { username: username.toLowerCase() },
                { phoneNumber: phoneNumber }
            ]
        })

        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'Bu email, telefon numarası veya kullanıcı adı zaten kullanımda'
            })
        }

        // Şifreyi hashle
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Telefon numarasını formatla (başında 0 varsa kaldır)
        const formattedPhone = phoneNumber.replace(/^0/, '')

        // Profil fotoğrafı yolu
        const profileImage = req.file 
            ? `/uploads/profiles/${req.file.filename}`
            : 'default-avatar.png'

        // Yeni kullanıcı oluştur
        const newUser = await User.create({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: hashedPassword,
            phoneNumber: formattedPhone,
            fullName,
            profileImage,
            timeCredits: 5,
            isActive: true
        })

        // Token oluştur
        const token = generateToken(newUser._id)

        res.status(201).json({
            success: true,
            message: 'Kayıt başarılı',
            data: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                phoneNumber: newUser.phoneNumber,
                fullName: newUser.fullName,
                profileImage: newUser.profileImage,
                timeCredits: newUser.timeCredits,
                token
            }
        })

    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).json({
            success: false,
            message: 'Kayıt işlemi başarısız',
            error: error.message
        })
    }
}

// Login işlemi
const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // Email ve şifre kontrolü
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Lütfen tüm alanları doldurun'
            })
        }

        // Kullanıcıyı bul
        const user = await User.findOne({ email: email.toLowerCase() })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Email veya şifre hatalı'
            })
        }

        // Şifre kontrolü
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Email veya şifre hatalı'
            })
        }

        // Token oluştur
        const token = generateToken(user._id)

        res.status(200).json({
            success: true,
            message: 'Giriş başarılı',
            data: {
                _id: user._id,
                username: user.username,
                email: user.email,
                fullName: user.fullName,
                profileImage: user.profileImage,
                timeCredits: user.timeCredits,
                token
            }
        })

    } catch (error) {
        console.error('Login Error:', error)
        res.status(500).json({
            success: false,
            message: 'Giriş işlemi başarısız',
            error: error.message
        })
    }
}

// Logout işlemi
const logout = async (req, res) => {
    try {
        // Client tarafında token'ı silmek yeterli olacak
        res.status(200).json({
            success: true,
            message: 'Çıkış başarılı'
        })
    } catch (error) {
        console.error('Logout Error:', error)
        res.status(500).json({
            success: false,
            message: 'Çıkış işlemi başarısız',
            error: error.message
        })
    }
}

module.exports = {
    register,
    login,
    logout
} 