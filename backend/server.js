require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const booksRoutes = require('./routes/books')
const authRoutes = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.method + " " + req.path);
    next()
})

app.use( '/api/books/', booksRoutes )
app.use( '/api/auth/', authRoutes )

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listen on http://localhost:' + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

