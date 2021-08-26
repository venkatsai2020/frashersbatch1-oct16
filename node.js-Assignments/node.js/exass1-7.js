let express=require('express');
let bodyParser=require('body-parser');
let app=express();
let ShoppingList=new Array();
let id=0;
let len=-1;

app.use(express.json());


app.get('/items',function(req,res)
{
    res.send(ShoppingList);
});
app.post('/items',function(req,res){
    let data=req.body;
    data.id=++id;
    ShoppingList.push(data);
    res.send('item added to array');
});
app.get('/items/:id',function(req,res){
    let id=Number(req.params.id);
    let flag=-1;
    ShoppingList.forEach((data)=>{
        if(data.id===id){
        res.send(data);
        flag++;
        }
    })
    if(flag==-1)
    res.send('Given id not found');
});

app.delete('/items/:id',(req,res)=>{
    let id=Number(req.params.id);
    let flag=-1;
    for(i=0;i<ShoppingList.length;i++)
    {
        if(ShoppingList[i].id===id)
        {
            for(j=i;j<ShoppingList.length-1;j++)
            {
                ShoppingList[j]=ShoppingList[j+1]
            }
            ShoppingList.length=ShoppingList.length-1;
            flag++;
            res.send('item deleated')
        }
    }
    if(flag==-1)
    res.send('Given id not found');
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log("error occured");
    }
    else
    console.log('server listning to port 3000');
})
