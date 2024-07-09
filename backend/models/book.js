const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ratings: {
        type: [{
            userId: {
                type: String,
                required: true,
                unique: true
            },
            grade: {
                type: Number,
                required: true
            }
        }]
    },
    averageRating: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)