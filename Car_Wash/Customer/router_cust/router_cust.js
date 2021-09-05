let express=require('express');
let customer_schema_model=require('../db_cust/customer_db.js');
let axios=require('axios');
let router=express.Router();

router.get('/',async (req,res)=>{
    let data=await customer_schema_model.find({});
    res.send(data);
});

router.post('/',async (req,res)=>{
    console.log(req.body);
    let data=await customer_schema_model.create(req.body);
    res.send(data);
});

module.exports=router;