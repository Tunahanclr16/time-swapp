const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('MongoDB Atlas bağlantısı başarılı')
    } catch (error) {
        console.error(`Veritabanı bağlantı hatası: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB 