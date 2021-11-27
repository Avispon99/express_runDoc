//npm i jsonwebtoken

const express = require("express");
const jwt = require("jsonwebtoken");

var app = express();

app.get('/', (req, res)=>{
    res.send('<h1>SERVER ACTIVE<h1>');
});


/* Test:
1. Open postman
2. send post request in "/login" endpoint in order to receiving the Token and copy it.
3. in the request of endpoint "/api" paste the token in value of the 
header "Authorization" with this format "Bearer <Token>"
4. send request of endpoint /api
*/ 
app.post('/login',(req,res)=>{
    const user ={
        name:'jhonatan',
        pass:'12934'
    }

    jwt.sign({user: user}, 'secretkey',(err, token)=>{ //find diference betwen jwt.sign nad jwt.encode >:v
        res.json({
            token  // this is same that write "token: token"
        });
    })
});

app.post('/api', autorization, (req,res)=>{

    jwt.verify(req.token, 'secretkey', (err, auth)=>{ // verify require the params (<Token>, <key>, <callbackFunction>)
        if(err){
            res.sendStatus(403); //forbidden
        }
        else{
            res.json({
                message: 'msg was Posted',
                authData: auth
            });
        }
    });
    
});


//Authorization: Bearer <token>
//Midleware of autorization process
function autorization (req, res, next){ //Note: Middlewares must be with this kind of function
    var bearerHeader = req.headers['authorization']; //intercept request.headers of "/api" 

    if(typeof bearerHeader !== 'undefined'){
        var bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken; 
        next();
    }
    else{res.sendStatus(403)} //403 forbbiden (prohibido)
}


app.listen(3000, (req, res)=>{
    console.log('Connect in PORT 3000');
});