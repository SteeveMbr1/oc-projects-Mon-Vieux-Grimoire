const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'get all'})
})

router.get('/bestrating', (req, res) => {
    res.json({msg: 'get the three best rated books'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'get one book'})
})

router.post('/', (req, res) => {
    res.json({msg: 'Add a new book'})
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