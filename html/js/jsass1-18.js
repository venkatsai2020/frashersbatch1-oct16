var s=window.prompt("enter the data");
var s1=s.split(" ");
var len=s1.length;
var s2="";
for(i=0;i<len;i++)
{
    s4="";
    var s3=s1[i].toLowerCase();
    var len1=s3.length;
    var count=0;
    for(j=1;j<len1;j++)
    {
        if(count==0){
            s4=s4+s3[j].toUpperCase();}
        else{
        s4=s4+s3[j];
        }
        count++;
        if(j==len1-1)
        {
            s4=s4+s3[0];
        }
    }
    s2=s2+s4+"ay";
    if(i!=len-1)
    s2=s2+" ";
}
document.write(s2);