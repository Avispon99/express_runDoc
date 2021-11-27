const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const companySchema= new Schema({
    name:{
        type: String,
        required: true
    },
    nit:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    e_mail:{
        type: String,
        required: true
    }
}, {timestamps:true});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;