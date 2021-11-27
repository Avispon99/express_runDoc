const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth_controller');


//const User =require('../models/users_schema');//<<

//auth Routes

router.post('/new', authController.new);

router.get('/all', authController.all);

router.get('/find', authController.find);

router.put('/update/:id', authController.update);

router.delete('/delete/:id', authController.remove);

module.exports = router;