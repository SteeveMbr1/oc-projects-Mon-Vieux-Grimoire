const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/signup', (req, res) => {
    const { email, password } = req.body

    res.json({
        msg: "signup with",
        auth: {email, password}
    })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body

    res.json({
        userId: "f6e51rg6r5e1zg",
        token: "stra5g1re5g1a5e41ga541reg4rege1v1rt1ing"
    })
})

module.exports = router