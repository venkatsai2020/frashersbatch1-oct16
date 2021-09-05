let express=require('express');
let admin_db_model=require('../admin_db/admin_db.js');
let router=express.Router();


router.get('/',async (req,res)=>{
 let data=await admin_db_model.find({});
 res.send(data);
});

router.post('/',(req,res)=>{
    res.send('in admin post');
});

module.exports=router;