// U: Gato_por_Liebre
// P: Liebre_por_mico
//mongodb+srv://<username>:<password>@cluster0.jdv7g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//dbUri='//mongodb+srv://Gato_por_Liebre:Liebre_por_mico@cluster0.jdv7g.mongodb.net/crud_data?retryWrites=true&w=majority';  
dbUri='mongodb+srv://fuse_pong:fusepong123@cluster0.jdv7g.mongodb.net/fusepong_scrum?retryWrites=true&w=majority'
// importando libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

// import model
const User =require('./models/users_schema'); 

// configurando express
let app = express();
app.use(bodyParser.urlencoded({extended: true})); // Never froget for parsear body
app.use(bodyParser.json()); // Never forget the json parser (important for post request)
//app.use(cors());


// root-index
app.get('/', function(req, res){
    res.send('<h1>->Server active - in port 3000</h1>')
});

var authenti =require('./routes/auth.js');
var companies = require('./routes/companies.js');

app.use('/company', companies);
app.use('/auth', authenti);


//connect with database
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((task) => {
        console.log('conect with the DB '+task)
        app.listen('3000');
})
.catch((error) => console.log(error));