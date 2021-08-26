const e = require("express");
var fs=require("fs");
var datafile=fs.readFileSync('./text7.txt',"utf-8");
console.log("data in file: "+datafile);
var newArray=datafile.split(" ");
var sum=0;
newArray.forEach(function(s){
    sum=sum+Number(s);
});
console.log(sum);