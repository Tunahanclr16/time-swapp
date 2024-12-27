const router = require('express').Router()
const { getAllUsers, getUserById, getProfile } = require('../controllers/user.controller')
const authenticate = require('../middleware/auth.middleware')

// Tüm kullanıcıları getir
router.get('/', getAllUsers)

// Profil bilgilerini getir
router.get('/profile', authenticate, getProfile)

// ID'ye göre kullanıcı getir
router.get('/:id', getUserById)

module.exports = router 