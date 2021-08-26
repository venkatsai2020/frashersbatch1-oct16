let express=require('express');
let mongoose=require('mongoose');
let router=require('./main_route.js');
let app=express();

app.use(express.json());
app.use('/inventory',router);

mongoose.connect('mongodb+srv://venkat:venkatsai2020@cluster0.whw6z.mongodb.net/Cluster0');
mongoose.Promise=global.Promise;
app.listen(3000,()=>{
    console.log('server is listning to port '+3000);
})