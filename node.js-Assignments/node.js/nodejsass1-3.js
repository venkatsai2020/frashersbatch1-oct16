var fs=require('fs');
var path=require('path');

fs.readdir(__dirname,function(err,files) {
  if(err)
  console.log('error');
  else{
    console.log(files);
  }
});



/*fs.readdir(__dirname,function(err,files) {
  if(err)
  console.log('error');
  else{
    files.forEach(function(file) {           //display only .txt file
      if(path.extname(file)=='.txt')
      console.log(file);
    });
  }
});*/
/*var list=fs.readdirSync(__dirname);  //read text file
console.log(list);*/


/*fs.writeFileSync('text1-4.txt',"new text is added in to the file");   //create file its a sync method
console.log("file is added");*/


/*fs.writeFile('text1-4.1.txt','new text is added in to the file',function(err,file){
  if(err)
  console.log("error");                                                                //crete file its a non-sync method
  else {
    console.log("file is created");
  }
});*/
