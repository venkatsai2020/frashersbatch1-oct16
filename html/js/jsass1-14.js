var newArray=new Array();
for(i=0;i<100;i++)
{
    newArray[i]=Math.floor(Math.random()*11);
}
document.write(newArray);
document.write("<br>");
document.write(newArray.sort()[99]);