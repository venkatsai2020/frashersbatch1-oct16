var p=require('prompt-sync');
var prompt=p();
let data=prompt('enter the name: ');
display(data);
function display(data){
console.log('Hello, '+data+"!");};