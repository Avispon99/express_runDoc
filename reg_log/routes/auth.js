const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

module.exports = router // miss = Throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))