var http=require('http');
var moment=require('moment');
var server=http.createServer(function(req,res)
{
    res.end(moment().format("dddd, DD MMMM YYYY, hh:mm:ss"));
})
server.listen(3000,'127.0.0.1',function(err){
    if(err)
    console.log("error occured");
    else
    console.log("port is listning"); 
});