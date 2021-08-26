let express=require('express');
const { db } = require('./main_db.js');
let inventory=require('./main_db.js');
let router=express.Router();

router.get('/',async (req,res)=>{
    let data=await inventory.find({});
    res.send(data);
});

router.post('/',async (req,res)=>{
    let data=await inventory.create(req.body);
    res.send(data);
});
router.get('/:name',async (req,res)=>{
    let data=await inventory.findOne({name:req.params.name});
    if(data)
    res.send(data);
    else
    res.send('data does not exist');
});
router.put('/',async(req,res)=>{
    db.collection('inventories').drop(); //delete a collection
    let data=await inventory.create(req.body);
    res.send(data);
});
router.put('/:itemname',async(req,res)=>{
    let data=await inventory.findOneAndUpdate({name:req.params.itemname},{$set:{name:req.body.name,quantity:req.body.quantity}});
    if(data)
    res.send(data);
    else
    res.send("data donsn't exit");
});
router.delete('/',(req,res)=>{
    db.collection('inventories').drop();
    res.send('collection is deleated');
});
router.delete('/:itemname',async (req,res)=>{
    let data= await inventory.deleteOne({name:req.params.itemname});
    res.send("deleated");
});
module.exports=router;