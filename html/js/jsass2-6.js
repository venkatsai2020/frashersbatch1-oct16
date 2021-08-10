var square=function(num){
    return num*num;
}
var sqrt=function(num)
{
    return Math.sqrt(num);
}
var newArray1=new Array();
var rec1=function(newArray,num)
{
    if(num<newArray.length)
    {
        newArray1[num]=square(newArray[num]);
        return rec1(newArray,num+1);
    }
    else
    {
        return 1;
    }
}
var newArray2=new Array();
var rec2=function(newArray,num)
{
    if(num<newArray.length)
    {
        newArray2[num]=sqrt(newArray[num]);
        return rec2(newArray,num+1);
    }
    else
    {
        return 1;
    }
}
var s=window.prompt("Enter the number array");
var newArray=s.split(" ");
rec1(newArray,0);
document.write("Given Array: "+newArray);
document.write("<br>"+"Square of the given Array: "+newArray1);
rec2(newArray,0);
document.write("<br>"+"Square_root of the given Array: "+newArray2);