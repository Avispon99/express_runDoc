const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('blogs->  DOGs - CATs');
});

router.get('/race', (req, res)=>{
    res.send('blogs/race -> Dogs: Dalmata - Cats: Siames');
});

module.exports = router;