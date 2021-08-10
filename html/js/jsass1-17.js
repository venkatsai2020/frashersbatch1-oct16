var s2=window.prompt("Enter the array");
var s=s2.split(" ");
var s1=window.prompt("Enter the no.of Shifts");
var len=s.length;
for(i=0;i<s1;i++)
{
    var c=1;
    for(j=0;j<len-c;j++)
    {
        var k=s[j+1];
        s[j+1]=s[j];
        s[j]=k;
    }
    c++;
}
document.write(s);