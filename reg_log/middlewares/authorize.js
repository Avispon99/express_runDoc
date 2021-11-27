const jwt = require('jsonwebtoken')

// authorization of routes
const authenticate = (req, res, next) => { //middleware
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SecretValue')

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message: 'Authentication failed'
        })
    }
} 

module.exports = authenticate // export middleware