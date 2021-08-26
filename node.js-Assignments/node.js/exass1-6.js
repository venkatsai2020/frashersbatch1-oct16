let express=require('express');
let app=express();
app.use(express.static('public'));

app.get('/img',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(3000,function(err){
    if(err)
    console.log('error occured');
    else
    console.log('serve is listning');
})