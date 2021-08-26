var express=require('express');
var bodyparse=require('body-parser');
var app=express();

app.set('view engine','ejs');
app.use(express.static('css'));
var urlencoder=bodyparse.urlencoded({extended:false});

app.get('/post',function(req,res){
    res.render('exhtml4');
});

app.post('/post',urlencoder,function(req,res,next){
    console.log(req.body);
    var data=req.body;
    res.render('exhtml4_p',data);
    next();
})

app.listen(3000,function(err){
    if(err)
    console.log('error occured');
    else
    console.log('server is listning to 3000 port');
})