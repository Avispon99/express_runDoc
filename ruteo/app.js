const express = require("express");
const apli= express();

apli.get('/', (req, res)=>{
    res.send('--- INDEX ---');
});

 // call routers
const blogRouter = require('./router/blogs'); //call blogs
const userRouter = require('./router/users'); //call users

//use routers
apli.use('/blogs', blogRouter); // use blogs
apli.use('/users', userRouter) // use users


apli.listen(3001);




// chain status with send and get code
/*
apli.get('/', (req, res)=>{
    
    res.status(500).send('cliente error');
    var s=res.statusCode;
    console.log(s);
    
});
*/