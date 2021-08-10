<<<<<<< HEAD
var s=window.prompt("enter the string");
=======
var s=window.prompt("Enter the Data");
var s1=s.split("a");
var len=s1.length;
var newArray=new Array();
for(i=0;i<len;i++)
{
    var k=0;
    var s3="";
    var s2=s1[i];
    if(s2.length>0)
    {
        if(s2[0]=="b")
        {
            for(j=1;j<s2.length;j++)
            {
                s3=s3+s2[j];
            }
        }
    }
    else{
        continue;
    }
    newArray.push(s3);
}
var len1=newArray.length;
var count=0;
var s4=newArray[0];
var max=s4.length;
for(i=1;i<len1;i++)
{
    var s4=newArray[i].length;
    if(max<s4)
    {
        max=s4;
        count=i;
    }
}
var len2=newArray[count].length;
if(len2==0)
document.write('""');
else
document.write(newArray[count]);
>>>>>>> 3d9ace071bdb0f0de4eda19cae0c950b4d9baeaf
