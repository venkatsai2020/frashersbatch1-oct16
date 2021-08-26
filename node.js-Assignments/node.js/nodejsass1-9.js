var fs=require('fs');
var data=fs.readFileSync('./text9.txt',"utf-8");
console.log(data);
var newArray=data.split('\r\n');
console.log(newArray);
