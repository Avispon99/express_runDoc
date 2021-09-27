const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('users-> jhonatan');
});

router.get('/documento', (req, res)=>{
    res.send('users/documento-> 12335466');
});

module.exports = router;