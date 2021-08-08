var num=window.prompt("Enter the data");
var sum=0;
for(i=1;i<=num;i++)
{
    if(i%3==0 || i%5==0)
    sum=sum+i;
}
document.getElementById("a").innerHTML="sum of the number is : "+sum;