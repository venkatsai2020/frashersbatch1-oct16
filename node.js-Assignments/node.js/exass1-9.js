let express=require('express');
let fs=require('fs');
let app=express();
let data=[];

app.use(express.json());

app.get('/books',(req,res)=>{
     if(fs.existsSync('./text_exass_9.json')){
     let data1=fs.readFileSync('./text_exass_9.json','utf8');
     res.send(JSON.parse(data1));
     }
     else
     res.send('file dose not exist');
});
app.post('/books',(req,res)=>{
    if(fs.existsSync('./text_exass_9.json')){
       data1=fs.readFileSync('./text_exass_9.json','utf8');
       data=JSON.parse(data1);
       data.push(req.body);
       fs.writeFileSync('./text_exass_9.json',JSON.stringify(data));
       res.send('file is updated');
    }
    else{
    data.push(req.body);
    fs.writeFileSync('./text_exass_9.json',JSON.stringify(data));
    res.send('file is crated');
}
});

app.listen(3000,()=>{
    console.log('server is listning to port 3000');
})