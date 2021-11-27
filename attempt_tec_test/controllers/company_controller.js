const Company =require('../models/company_schema');

const companyController = {
    add (req, res){ 
        let company = new Company({
            "name": req.body.name,
            "nit": req.body.nit,
            "phone": req.body.phone,
            "adress": req.body.adress,
            "e_mail": req.body.e_mail,

         });
        
         user.save((err, data)=>{ // in this case we don't use "then" in order to show another way to doing the same. 
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json(data);
        });
    },
    showList (req, res){ //ok
        Company.find()
        .then((retorno)=>{
            res.send(retorno);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, 
    findcompany (req, res){ //ok,    
        Company.findById({_id:'61765cca5244da3cd13eb110'}) // or only putting just '61458babdcc5520f68dc44ee' without {}
        .then((retorno)=>{
            res.send(retorno)
        });
    },
    companyupdate (req, res) { //ok
        var modif = {
            "name": req.body.name
        }
        Company.findByIdAndUpdate(req.params.id, modif, {new: true}).exec((err, doc)=>{
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json(doc);
        });
    },
    companydelete (req, res) {   
        console.log('DELETE')
        Company.findByIdAndDelete(req.params.id).exec((err, doc)=>{
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json(doc);
        }); 
    }
};

module.exports = companyController;