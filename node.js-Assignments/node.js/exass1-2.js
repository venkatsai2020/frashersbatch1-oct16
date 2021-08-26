var express=require('express');
var moment=require('moment');
let year=moment().format('YYYY');
console.log(year);
var app=express();
app.get('/year',function(req,res){
    let age=req.query.age;
    let birth_Year=year-age;
    res.send(`year of birth is: ${birth_Year}`);
});
app.listen(3000,function(err){
    if(err)
    console.log("error occured");
    else
    console.log("server is listining");
})