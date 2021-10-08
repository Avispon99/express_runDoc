    //INSTALL BABEL WITH NODEMON

    //Install babel
//npm install --save-dev '@babel/core''@babel/cli' '@babel/preset-env' '@babel/node'

    //Install nodemon
//npm install --save-dev nodemon

   //Create presets
/*
Next, we need to tell babel how to transpile our files by
 creating a .babelrc file in the root directotry of
  our application and adding the following code to it:

{
  "presets": [
    "@babel/preset-env"
  ]
}

*/

    //Adding script to package.json
//"start": "nodemon --exec babel-node index.js"

//Note: "index.js" is the name that i choose


//----------------------------------------------------

import commonErrors from './messages.js' //Test of default import - here you can choose the name of the import default
import {add} from './messages.js' //Test of expecific import - here is necesary assignate the real name of module in the importa unless that you use 'as'
import express from 'express'; //Test module import


const app = express();
const { notFound } = commonErrors; //specify what inside of brakets of export in messages.js file

/*
app.get('/', (req, res)=>{
  res.send('HELLO WORLD');
});
*/

app.use((req, res, next) => res.status(404).json(notFound()));

console.log(add(3,4)) 




app.listen(3000);