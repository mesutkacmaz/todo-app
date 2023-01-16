const express = require('express')
const { getTodos } = require('../controllers/todoController')

const router = express.Router()

router.route('/').get(getTodos)

module.exports = router
