var fibonacci=function(n1,n2)
{
    var newArray=new Array();
    var k=0;
    newArray[k]=n1;
    k++;
    newArray[k]=n2;
    k++;
    for(i=2;i<=100;i++)
    {
        newArray[k]=newArray[i-1]+newArray[i-2];
        k++;
    }
    document.getElementById("a").innerHTML="First 100 fibonacci series : "+"\n"+newArray;
}
function fib()
{
    fibonacci(1,1);
}