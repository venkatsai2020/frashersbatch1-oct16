var isEven=function(num)
{
    if(num%2==0)
    {
        return 0;
    }
    else
    return -1;
};
var rec=function(newArray1,num1)
{
    if(num1<newArray1.length){
    if(isEven(newArray1[num1])==0)
    {
        return num1;
    }
    else
    {
       return rec(newArray1,num1+1);
    }
}
 else
 {
    return -1;
 }
};
var s=window.prompt("enter number array :");
var newArray=s.split(" ");
var re=rec(newArray,0);
if(re==-1)
document.write("<br>"+"there was no even element in Array");
else
document.write("<br>"+"the first even element in Array is : "+newArray[re]);