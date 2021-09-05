let express=require('express');
let mongoose=require('mongoose');
let router=require('./router_admin/router_admin.js');
let app=express();

app.use(express.json());
app.use('/admin',router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/car_wash')

app.listen(5000,()=>{
    console.log('server is litning to port 5000');
});