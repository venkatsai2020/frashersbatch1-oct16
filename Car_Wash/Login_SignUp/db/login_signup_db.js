let mongoose=require('mongoose');
let schema=mongoose.Schema;
let login_signup=schema({
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true,
    }
});
let login_signup_model=mongoose.model('login_signup',login_signup);
module.exports=login_signup_model;