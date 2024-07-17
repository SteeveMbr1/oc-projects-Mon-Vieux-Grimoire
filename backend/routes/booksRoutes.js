const express = require('express')
const upload = require('../middlewares/multer-config');
const bookController = require('../controllers/bookController')
const authMiddleware = require('../middlewares/auth');

const router = express.Router()


router.get('/', bookController.getAllBooks)

router.get('/bestrating', bookController.getBestratingBooks)

router.get('/:id', bookController.getOneBook)

router.post('/', authMiddleware, upload, bookController.createBook)

router.put('/:id', authMiddleware, upload, bookController.updateBook)

router.delete('/:id', authMiddleware, bookController.deleteBook)

router.post('/:id/rating', authMiddleware, bookController.rateBook)


module.exports = router