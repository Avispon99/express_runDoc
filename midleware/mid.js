const express = require("express");
let app = express();

app.use(midd); //example 1 of use a middleware "midd" in global routes

app.get('/', (req, res)=>{
    res.send('<h1>Server up<h1>')
});

app.get('/users', auth,  (req, res)=>{ //example 2 of use a middleware "auth" in especific route
    res.send('<h1>Welcome User Admin! <h1>');
});

//declaration of middlewares
function midd(req, res, next){ //this midleware is being used in all cases because is used in global way in app.use(midd)
    console.log('midd');
    next();
}

function auth(req, res, next){ //this middlerare must be test it using url query "?admin=true" if you want that it works, else jusd denied access
    if(req.query.admin === 'true'){ //in this example we will use example of how access to request o response params any middleware 
        console.log('auth');
        next()
    }
    else{
        res.send('<h1>No auteticate<h1>');
    }
}
    
app.listen(3000);