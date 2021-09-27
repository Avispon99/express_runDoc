// BASIC STARTED CONFIG FOR EXPRESS PROJECT

   //Install packaje jason   
// npm init -y or npm init -y ("-y" to avoid questions) 

   //Install express packaje
//npm i express

   //Set nodemon - restart server automatically (optional)
//npm install nodemon --save-dev
/*in packaje.json must look like this in scripts section:  
"scripts": {
    "devStart": "nodemon server.js"
  }  
and save changes in pakacje.json
"Server.js" is this case is the name of file whre we going to use nondemon
*/
//npm run devStart


// Aplicaton Route
const express = require('express');
const bodyParser = require('body-parser'); //For can get body of request 

const app = express();

app.use(bodyParser.urlencoded({extended: false})) //midleware of body parser
app.use("/public", express.static(__dirname + "/public"))// midleware for serve css style in html file (statics)

app.get('/',(req, res)=>{ // index root path
    res.sendFile(__dirname+"/views/index.html"); // serve index html file in the root path
}); 

app.post('/name',(req,res)=>{ // send post request to /name path and response it sending any data
    console.log(req);
    res.send(req.body.first+' '+req.body.last); // sending body content first name="first" value="Jhonatan" and name="last" (this from html index file) 
});

app.listen(3001);









//simple get request examp
/*
const express = require('express');
const app = express();

let vari={
    name:'Jhonatan'
}

app.get('/',(req, res)=>{
    if(vari.name === 'Jhonatan'){
        res.json({docu:"hello "+vari.name})
    }
    else{
        res.send('hello world');
    }      
;});


*/

//post request examp- (pending)
/*
app.post('/', function (req, res) {
    console.log(req.body);
  });

app.listen(3001); 
*/