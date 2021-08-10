var find=function(newArray,isEven)
{
    for(i=0;i<newArray.length;i++)
    {
        var count=-1;
        var count=isEven(newArray[i]);
        if(count==0)
        {
            document.write(newArray[i]);
            break;
        }
    }
}
function isEven(num)
{
    if(num%2==0)
    return 0;
    else
    return -1;
}
var s=window.prompt("enter the number array");
var newArray=s.split(" ");
find(newArray,isEven);
