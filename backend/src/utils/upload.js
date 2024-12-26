const multer = require('multer')
const path = require('path')

// Dosya yükleme için depolama ayarları
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/uploads/profiles'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, 'profile-' + uniqueSuffix + path.extname(file.originalname))
    }
})

// Dosya filtreleme (sadece resim dosyaları)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Sadece .jpeg, .jpg ve .png formatları kabul edilir!'), false)
    }
}

// Multer konfigürasyonu
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5 // max 5MB
    }
})

module.exports = upload 