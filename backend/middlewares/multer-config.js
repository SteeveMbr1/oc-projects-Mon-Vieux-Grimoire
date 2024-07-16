const fs = require('fs')
const multer = require('multer')
const slugify = require('../utils/slugify')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(process.env.UPLOAD_IMG_PATH)) {
            fs.mkdirSync(process.env.UPLOAD_IMG_PATH, { recursive: true }, (err) => {
                if (err) throw err;
            });
        }
        cb(null, process.env.UPLOAD_IMG_PATH)
    },
    filename: function (req, file, cb) {
        const book = JSON.parse(req.body.book)
        const ext = file.mimetype.split('/')[1]
        const filename = slugify(book.author) + '_' + slugify(book.title) + '.' + ext
        cb(null, filename)
    }
})

module.exports = multer({ storage: storage }).single('image')