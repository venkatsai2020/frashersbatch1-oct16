var arrayObject=new Array();
let names=['Tom','lvan','Jerry'];
for(let i in names)
{
    var array={
       name:names[i],
       length:names[i].length
   };
   arrayObject[i]=array;
}
console.log(arrayObject);