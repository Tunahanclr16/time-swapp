const router = require('express').Router()
const { register, login, logout } = require('../controllers/auth.controller')
const upload = require('../utils/upload')

// Register endpoint (profil fotoğrafı ile)
router.post('/register', upload.single('profileImage'), register)

// Login endpoint
router.post('/login', login)

// Logout endpoint
router.post('/logout', logout)

module.exports = router


