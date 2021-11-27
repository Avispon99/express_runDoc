const User =require('../models/users_schema');

const authController = {
    new (req, res){ 
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
    },
    all (req, res){ //ok
        User.find()
        .then((retorno)=>{
            res.send(retorno);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, 
    find (req, res){ //ok,   but fit the id throught req.body >:c
        User.findById({_id:'61765cca5244da3cd13eb110'}) // or only putting just '61458babdcc5520f68dc44ee' without {}
        .then((retorno)=>{
            res.send(retorno)
        });
    },
    update (req, res) { //ok
        var modif = {
            "name": req.body.name
        }
        User.findByIdAndUpdate(req.params.id, modif, {new: true}).exec((err, doc)=>{
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json(doc);
        });
    },
    remove (req, res) {   
        console.log('DELETE')
        User.findByIdAndDelete(req.params.id).exec((err, doc)=>{
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json(doc);
        }); 
    }
};

module.exports = authController;