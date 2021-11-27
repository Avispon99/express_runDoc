const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth_controller');

//company Routes

router.post('/add', authController.new);

router.get('/showList', authController.all);

router.get('/findcompany', authController.find);

router.put('/companyupdate/:id', authController.update);

router.delete('/companydelete/:id', authController.remove);

module.exports = router;