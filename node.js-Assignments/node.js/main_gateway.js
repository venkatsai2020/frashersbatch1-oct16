let express=require('express');
let axios=require('axios');
const { response } = require('express');
let router=express.Router();

router.all('/',async(req,res)=>{
let data= await axios({
    method:req.method,
    url:'http://localhost:3000/inventory/',
    Headers:'application/json',
    data:req.body
    });
    res.send(data.data);
});

router.all('/:itename',async(req,res)=>{
    axios({
        method:req.method,
        url:'http://localhost:3000/inventory/'+req.params.itename,
        Headers:'application/json',
        body:req.body
        }).then((response)=>{
        res.send(response.data);
    });
    });


module.exports=router;