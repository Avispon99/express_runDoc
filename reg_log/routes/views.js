const express = require('express');
const router = express.Router();

const ViewController = require('../controllers/ViewController'); // controller by db process
const authorization  = require('../middlewares/authorize') // middleware by autorizer acces to endpoint


router.get('/list', authorization, ViewController.listAll); // endpoint with middleware that verify token and in base of that allow or deny the access

module.exports = router