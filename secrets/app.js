   //npm install dotenv
   //create file .env
   //const dotenv = require('dotenv'). config(); in te connect app
   //process.env.DB_URI - example
   
   const express = require('express');
   const mongoose = require('mongoose');
   const dotenv = require('dotenv'). config();

   const app = express();

   console.log(dotenv.parsed); //parse .env
 
   /*
   nameDatabase='nueva'
   dbUri='mongodb://127.0.0.1:27017/'+nameDatabase;  // example of simple local conection in mongoDB  
   */

   //dbUri='mongodb://jefe:passwo@127.0.0.1:27017/test'; // example with user and password - user create for the especific database


   Uri_db='mongodb://'+
   process.env.DB_USER+':'+
   process.env.DB_PASS+'@'+
   process.env.DB_HOST+':'+
   process.env.DB_PORT+'/'+
   process.env.DB_NAME

mongoose.connect(Uri_db, {useNewUrlParser: true, useUnifiedTopology: true}) //process.env.DB_URI - example
.then((task) => {
        console.log('>>Connect with the DB: '+task)
        app.listen('3000');
})
