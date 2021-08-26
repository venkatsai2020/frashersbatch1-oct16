var app=require('express')();
var moment=require('moment');
var portSelect=require('./port');
var port=portSelect.portSelect();


app.get('/',function(req,res){
    res.send('Hello World');
})


app.get('/time',function(req,res){
    res.send(moment().format('YYYY-M-DD Thh:m:secZ'));
});

app.listen(port||8080,function(err){
    if(err)
    console.log('error occured');
    else{
        if(port=="")
    console.log('sever is listning to: 8080');
    else
    console.log('sever is listning to: '+port);
    }
})