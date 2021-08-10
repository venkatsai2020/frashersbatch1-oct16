var composedValue=function(f1,f2,value)
{
    return f1(f2(value));
};
var f1=function(value)
{
    return value*value;
};
var f2=function(value)
{
    return value*value;
};


var total=composedValue(f1,f2,5);
document.write(total);