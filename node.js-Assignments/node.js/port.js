var prompt=require('prompt-sync')();
module.exports.portSelect=function(){
    let port=prompt('enter the port number: ');
    return port
}