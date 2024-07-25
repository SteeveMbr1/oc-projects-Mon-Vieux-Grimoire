const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const slugify = require('../utils/slugify')


module.exports = (req, res, next) => {

    if (! req.file ) {
        return next();
    }
    if (!fs.existsSync(process.env.UPLOAD_IMG_PATH)) {
        fs.mkdirSync(process.env.UPLOAD_IMG_PATH, { recursive: true }, (err) => {
            if (err) throw err;
        });
    }

    const book =  JSON.parse(req.body.book)
    const filename = slugify(book.author) + '_' + slugify(book.title) + '.webp'
    req.file.filename = filename

    const { buffer } = req.file;
    sharp(buffer)
        .resize({ width: 500 })
        .webp()
        .toFile(path.resolve(process.env.UPLOAD_IMG_PATH, filename) )
    next()
}