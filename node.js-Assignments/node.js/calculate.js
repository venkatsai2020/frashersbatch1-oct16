var sum=function(){
    console.log("The sum of 3 & 7 is: "+(3+7));
};
var mul=function(){
    console.log("The sum of 3 & 7 is: "+(3*7));
};
var calculate={
    sum:sum(),
    mul:mul()
}
module.exports=calculate;