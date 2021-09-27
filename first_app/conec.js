   //Export example. 
function fu(m){
    console.log(m)
}
   //export as object
module.exports.fun = fu; // "fun" as  my assignation of object variable to export, and "fu" as function required

   //export without object
//module.exports = fu // "fu" function export directly without object 


//Note: put "module" is optional 