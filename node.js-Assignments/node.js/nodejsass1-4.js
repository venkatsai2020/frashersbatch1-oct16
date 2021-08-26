var fs=require("fs");
/*fs.writeFileSync('text1-4.txt',"new text is added in to the file");
console.log("file is added");*/
fs.writeFile('text1-4.1.txt','new text is added in to the file',function(err,file){
  if(err)
  console.log("error");
  else {
    console.log("file is created");
  }
});
