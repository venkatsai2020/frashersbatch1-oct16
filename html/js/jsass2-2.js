var value=window.prompt("enter the a value :");
document.write("<br>");
var compose=function(square,double) {
 return square(double(value));
}
var square=function(num){
    return num*num;
}
var double=function(num){
    return 2*num;
}
var f1=function(value)
{
    return compose(square,double);
}
var f2=function(value)
{
    return compose(double,square);
}
document.write(f1(value)+"<br>");
document.write(f2(value));