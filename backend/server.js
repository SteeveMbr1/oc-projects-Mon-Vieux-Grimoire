require('dotenv').config()

// Required
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// Middlewares
const cors = require('cors')
const serverRequestLogs = require('./middlewares/serverRequestLogs')

// Routes
const booksRoutes = require('./routes/booksRoutes')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(serverRequestLogs)

app.use( '/api/auth/', authRoutes )
app.use( '/api/books/', booksRoutes )
app.use('/images', express.static(path.join(__dirname, process.env.UPLOAD_IMG_PATH)));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listen on http://localhost:' + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })
