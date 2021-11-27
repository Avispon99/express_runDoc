const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const register = (req, res, next) =>{  
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){ //encrypt password taken from req.body (from postman or fronted) and deliver it as "hashedPass", with 10 cycles
        if(err){
            res.json({
                error: err
            })
        }

        //create the new document based in the model schema inside of bcrypt callback function
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
 
        user.save()
        .then(user =>{
            res.json({
                message: 'User Added Succesfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error ocurred!'
            })
        })

    });

}



const login = (req, res, next)=>{
    var user_email = req.body.email
    var user_phone = req.body.phone
    var password = req.body.password
 

    User.findOne({$or:[{email: user_email},{phone: user_phone}]}) //mogoose find in database if match successful phone or email 
    .then(user =>{ // whatever be the the result it will be store in var "user"
        if(user){ // if "user" is not undefined, namely it exist.
            bcrypt.compare(password, user.password, function(err, result){ // compare password entered with password desencrypted stored in database 
                if(err){
                    res.json({
                        error: err
                    })
                }
                
                if(result){ // if result of compare method is positive then generate token for login session
                    let token = jwt.sign({name: user.name}, 'SecretValue', {expiresIn:'5m'})
                    res.json({
                        message: 'Login Successful',
                        token
                    })
                }
                else{ // if result is not positive it means that password not matched
                    res.json({
                        massage: 'Password does not matched!'
                    })
                }
            })
        }else{ // if "user" is undefined or doesn't exist
            res.json({
                message: 'No user found!'
            })
        }
    })
}


module.exports = {
    register, login
}