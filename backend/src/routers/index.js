const router = require('express').Router()

// Auth routes
router.use('/auth', require('./auth.routes'))

// User routes
router.use('/users', require('./user.routes'))

module.exports = router
