const router = require('express').Router()
const { getAllUsers, getUserById, getProfile } = require('../controllers/user.controller')

// Tüm kullanıcıları getir
router.get('/', getAllUsers)

// Profil bilgilerini getir
router.get('/profile', getProfile)

// ID'ye göre kullanıcı getir
router.get('/:id', getUserById)

module.exports = router 