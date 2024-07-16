const express = require('express')
const upload = require('../middlewares/multer-config');
const Book = require('../models/book')

const router = express.Router()


router.get('/', (req, res) => {
    res.json([
        {
            _id:"dmslfmldf",
            userId: "dfg4z54g7g",
            title: "Un livre",
            author: "Jean de la Fontaine",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 2017,
            genre: "roman",
            ratings: [
                {
                    userId: "dfg4z54g7g",
                    grade: 3,
                }
            ],
            averageRating: 3,
        },
        {
            _id:"dsddfd",
            userId: "dfg4z5fd7g",
            title: "Un autre livre",
            author: "Guy de Maupassant",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 1802,
            genre: "roman",
            ratings: [
                {
                    userId: "dfg4z5fd7g",
                    grade: 4,
                }
            ],
            averageRating: 4,
        },
        {
            _id:"45sd1fds1",
            userId: "t1f4z54g7g",
            title: "Un livre",
            author: "Victor Hugo",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 2017,
            genre: "roman",
            ratings: [
                {
                    userId: "t1f4z54g7g",
                    grade: 2,
                }
            ],
            averageRating: 3.2,
        },
    ])
})

router.get('/bestrating', (req, res) => {
    res.json([
        {
            _id:"dmslfmldf",
            userId: "dfg4z54g7g",
            title: "Un livre",
            author: "Jean de la Fontaine",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 2017,
            genre: "roman",
            ratings: [
                {
                    userId: "dfg4z54g7g",
                    grade: 3,
                }
            ],
            averageRating: 3,
        },
        {
            _id:"dsddfd",
            userId: "dfg4z5fd7g",
            title: "Un autre livre",
            author: "Guy de Maupassant",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 1802,
            genre: "roman",
            ratings: [
                {
                    userId: "dfg4z5fd7g",
                    grade: 4,
                }
            ],
            averageRating: 4,
        },
        {
            _id:"45sd1fds1",
            userId: "t1f4z54g7g",
            title: "Un livre",
            author: "Victor Hugo",
            imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
            year: 2017,
            genre: "roman",
            ratings: [
                {
                    userId: "t1f4z54g7g",
                    grade: 2,
                }
            ],
            averageRating: 3.2,
        },
    ])
})

router.get('/:id', (req, res) => {
    res.json({
        _id:"dsddfd",
        userId: "dfg4z5fd7g",
        title: "Un autre livre",
        author: "Guy de Maupassant",
        imageUrl: "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
        year: 1802,
        genre: "roman",
        ratings: [
            {
                userId: "dfg4z5fd7g",
                grade: 4,
            }
        ],
        averageRating: 4,
    })
})

router.post('/', upload, (req, res) => {
    const book = JSON.parse(req.body.book)
    book.imageUrl = req.file.path
    res.json(book);
})

router.put('/:id', (req, res) => {
    res.json({msg: 'Update a book'})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a book'})
})

router.post('/:id/rating', (req, res) => {
    res.json({msg: 'Rate a book'})
})


module.exports = router