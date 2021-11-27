const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth');
const viewsRoute = require('./routes/views')
const { appendFile } = require('fs'); // fingure out

let app =express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))


dbName='login_db';
dbUri='mongodb://127.0.0.1:27017/'+dbName;
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res)=>{
    res.send('Welcome to the root')
});


//http://localhost:3000/api/auth/register - for register (endpoint for create new user with password hashed) - post
//http://localhost:3000/api/auth/login - for login (endpoint for login and generate new token) - post
app.use('/api/auth', authRoute);

//"http://localhost:3000/api/views/list"  - for get list of users (endpoint protected with token) - get
app.use('/api/views', viewsRoute);


var PORT = 3000; 

app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})
