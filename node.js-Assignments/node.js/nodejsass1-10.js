
//without using any module.. to take input from console
/*const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question('enter the data to be saved ',data => {
    console.log(`data is: ${data}`);
    readline.close();
})*/

//using the prompt-syns module

var prompt=require('prompt-sync');
var fs=require('fs');
var prompt1=prompt();
var filedata=prompt1('data data: ');
console.log(filedata);
fs.writeFileSync('./text10.txt',filedata);
console.log("...file is created....");
console.log("data in the created file is: ");
var retrivedata=fs.readFileSync('./text10.txt','utf8');
console.log(retrivedata);


