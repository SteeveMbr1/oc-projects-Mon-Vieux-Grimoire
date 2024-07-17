const Book = require('../models/book')
const {path} = require('path')
const fs = require('fs')

/**
 * Create one book
 * Route : POST /
 */
exports.createBook = (req, res) => {
    const data = JSON.parse(req.body.book);
    data.imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null
    data.userId = req.auth.userId

    const book = new Book(data)
    book.save()
        .then(() => res.status(201).json({ message: 'Le livre à bien été ajouté !' }))
        .catch(error => res.status(400).json({ error }));
}

/**
 * Get all books
 * Route : GET /
 */
exports.getAllBooks = async (req, res) => {
    const books = await Book.find()
    res.json(books)
}

/**
 * Find one book by his id
 * Route : GET /:id
 */
exports.getOneBook = async (req, res) => {
    const book = await Book.findOne({_id : req.params.id})
    res.json(book)
}

/**
 * Get the three best rating books
 * Route : GET /bestrating
 */
exports.getBestratingBooks = async (req, res) => {
    const books = await Book.find()
                            .sort( { averageRating: -1 } )
                            .limit(3)
    res.json(books)
}

/**
 * Update the book with the id
 * Route : PUT /:id
 */
exports.updateBook = async (req, res) => {
    const data = req.body

    data.userId = req.auth.userId
    data.imageUrl = req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : data.imageUrl

    Book.findByIdAndUpdate(req.params.id, data)
        .then( book => res.json(book))
        .catch(error => res.json(error))
}


/**
 * Delete the book with the id
 * Route : DELETE /:id
 */
exports.deleteBook = (req, res) => {
    Book.findOneAndDelete({_id : req.params.id})
        .then( book => res.json(book))
        .catch(error => res.json({error : error}))
}

/**
 * Add a rate to the book with the id
 * Route : POST /:id/rating
 */
exports.rateBook = async (req, res) => {
    const book = await Book.findById(req.params.id)
    book.ratings.push({
        userId : req.body.userId,
        grade: req.body.rating
    })

    const rates = book.ratings.reduce(
        (sum, rate) => sum + rate.grade
    , 0)
    book.averageRating = Math.round(rates / book.ratings.length)

    book.save()
        .then( book => res.json(book) )
        .catch( error => res.json(error) )
}
