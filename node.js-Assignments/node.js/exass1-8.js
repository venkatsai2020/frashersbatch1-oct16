let express=require('express');
let moment=require('moment');
let app=express();
let path=__dirname;
app.set('views',path);
app.set('view engine','ejs');

app.get('/date',(req,res)=>{
    let date=moment().format('do MMMM YYYY [Time:]HH:mm:ss');
    res.render('exhtml8',{date});
})



app.listen(3000);
console.log('server is listning to port 3000');