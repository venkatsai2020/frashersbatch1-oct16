let express=require('express');
let mongoose=require('mongoose');
let router=require('./router_cust/router_cust.js');
let app=express();

app.use(express.json());
app.use('/customer',router);


mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/car_wash');
app.listen(4000,()=>{
    console.log('sever is listning to port 4000');
});