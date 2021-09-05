let express=require('express');
let login_signup_coll=require('../db/login_signup_db.js');
let mongoose=require('mongoose');
let axios=require('axios');
let router=express.Router();


router.get('/', async (req,res)=>{
    //display all the login_signup details
    let data=await login_signup_coll.find({});
   res.send(data);
});

router.post('/',async (req,res)=>{
    //creating data-base for Login_signup...
    let log_data= await login_signup_coll.create({
        username:req.body.username,
        password:req.body.password
    });
    //creating data-base for customer
    let cust_data=await axios({
        method:'post',
        url:'http://localhost:4000/customer',
        data:{
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            ref_id:mongoose.Types.ObjectId(log_data._id)
        }
    });
    console.log(log_data);
    console.log(cust_data.data);
});

module.exports=router;