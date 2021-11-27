const jwt = require('jsonwebtoken');
const User = require('../models/user');

const listAll = (req, res) =>{
    User.find()
    .then((listUsers)=>{
        console.log(listUsers)
        res.send('<h2><center>LISTA DE USUARIOS</center><h2>\n\n'+listUsers)
    })
    .catch((err)=>{
        console.log(err)
    })
}



module.exports.listAll = listAll

//Note: export funcions options in js also can be like this:
//module.exports = { listAll }

// export functions is no the same like export for example router 
