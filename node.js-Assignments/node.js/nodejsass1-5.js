var fs=require("fs");
var read=fs.readFileSync("text5.txt",'utf8');
console.log(read);
var newArray=read.split("\r\n");
console.log(newArray);
var count=0;
newArray.forEach(function(names)
{
  let name=names.split(" ");
  name.forEach(function(name1){
    if(name1=='john')
    count++;
  });
});
console.log("no.of john word in txt file "+count);
