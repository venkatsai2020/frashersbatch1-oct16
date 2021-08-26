var app=require('express')();
var prompt=require('prompt-sync')();
var portSelect=require('./port');

var port=portSelect.portSelect();
app.get('/home',function(req,res){
    res.send('Hello World!');
})

app.listen(port,function(err){
    if(err)
    console.log('error occured');
    else
    console.log(`port ${port} is listning`);
})