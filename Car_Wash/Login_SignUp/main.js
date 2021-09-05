let express=require('express');
let router=require('./router/router.js');
let mongoose=require('mongoose');
let app=express();

app.use(express.json());
app.set('view engine','ejs');
app.use(router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/car_wash');

app.listen(3000,()=>{
    console.log('server is listning to port 3000');
})