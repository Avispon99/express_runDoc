// U: Gato_por_Liebre
// P: Liebre_por_mico
//mongodb+srv://<username>:<password>@cluster0.jdv7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
dbUri='//mongodb+srv://Gato_por_Liebre:Liebre_por_mico@cluster0.jdv7g.mongodb.net/crud_data?retryWrites=true&w=majority';  
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');


// import model
const User =require('./models/users_schema'); 

// set express and body parser
let app = express();
app.use(bodyParser.urlencoded({extended: true})); // Never froget for parsear body
app.use(bodyParser.json()); // Never forget the json parser (important for post request)

//connect with database
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((task) => {
        console.log('conect with the DB '+task)
        app.listen('3000');
})
.catch((error) => console.log(error));


//Note: "then" method is optional
//save - Note: then useful for asyncronus operatios

//example 1 - here we use then that is a method for asuncronus function than expect the result of return of the method in this case "save()"
app.get('/new', (req, res)=>{
    let user = new User({
       name: 'victorique',
       user: 'vic_t',
       password: 'abc123' 
    });

    user.save()
    .then((retorno)=>{
        res.send(retorno);
    });
});

//example 2 - testing with postman in this case for be with post request and use req.body
app.post('/new2', (req, res)=>{
    let user = new User({
        "name": req.body.name,
        "user": req.body.user,
        "password": req.body.password
     });
    
    user.save((err, data)=>{ // in this case we don't use "then" in order to show another way to doing the same. 
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(data);
    });

});


//find all
app.get('/all',(req, res)=>{
    User.find()
    .then((retorno)=>{
        res.send(retorno);
    })
    .catch((err)=>{
        console.log(err);
    });
});

//find by id
app.get('/docs',(req, res)=>{
    User.findById({_id:'61458babdcc5520f68dc44ee'}) // or only putting just '61458babdcc5520f68dc44ee' without {}
    .then((retorno)=>{
        res.send(retorno)
      });
});  

// update data enter id throught url in this case (Test with postman)
app.put('/docs/:id', (req, res)=>{
    var modif = {
        "password": req.body.password
    }
    User.findByIdAndUpdate(req.params.id, modif, {new: true}).exec((err, doc)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(doc);
    });
});

app.delete('/docs/:id', (req, res)=>{
    console.log('DELETE')
    User.findByIdAndDelete(req.params.id).exec((err, doc)=>{
        if(err)
            res.status(400).send(err);
        else
            res.status(200).json(doc);
    }); 
});



// root-index
app.get('/', function(req, res){
    res.send('<h1>->Server active - in port 3000</h1>')
});

