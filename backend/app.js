require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./src/db/dbConnection')

const app = express()

// MongoDB bağlantısı
connectDB()

// CORS ayarları
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true
}))

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Uploads klasörünü statik olarak serve et
app.use('/uploads', express.static('public/uploads'))

// API Routes
const authRoutes = require('./src/routers/auth.routes')
const userRoutes = require('./src/routers/user.routes')

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

// API Welcome route
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to Time Banking API"
    })
})

// Error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Sunucu hatası',
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Backend API ${PORT} portunda çalışıyor`)
    console.log('http://localhost:' + PORT)
})