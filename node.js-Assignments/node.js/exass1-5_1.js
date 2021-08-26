var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.urlencoded());

app.post('/str',function(req,res){
    let s=req.body.reverse;
    let s1="";
    for(i=s.length-1;i>=0;i--)
    {
        s1=s1+s[i];
    }
    res.send(s1);
})


app.listen(3000,function(err){
if(err)
console.log('error occured');
else
console.log('serve is listning');
})
