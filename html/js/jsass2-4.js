var map=function(newArray,f1,f2) {
    var newArray1=new Array();
    for(i=0;i<newArray.length;i++)
    {
        newArray1[i]=f1(newArray[i]); 
    }
    document.write("Square of the Array Elements :"+newArray1+"<br>");
    var newArray2=new Array();
    for(i=0;i<newArray1.length;i++)
    {
        newArray2[i]=f2(newArray1[i]); 
    }
    document.write("Square of the above Array Elements :"+newArray2);
}
var square=function(num) {
    return num*num;
}
var sqroot=function(num) {
    return Math.sqrt(num);
}
var s=window.prompt("enter the number Array");
newArray=s.split(" ");
document.write("Give Array :"+newArray+"<br>");
map(newArray,square,sqroot);