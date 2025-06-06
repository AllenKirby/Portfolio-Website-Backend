const express = require('express')
const { sendEmail } = require('../Controller/controller.js')
const router = express.Router()

router.post('/', sendEmail)

module.exports = router