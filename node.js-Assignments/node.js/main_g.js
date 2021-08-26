let express=require('express');
let router=require('./main_gateway.js');
let app=express();

app.use(express.json());
app.use(router);

app.listen(4000,()=>{
    console.log('server is listning to port '+4000);
})