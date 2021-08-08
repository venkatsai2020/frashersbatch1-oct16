var s=window.prompt("Enter the string");
var s1=s.split(",");
var r1="";
var r2="";
var newArray=new Array();
var k=0;
for(i=0;i<=s1.length;i++){
r1=r1+"*";}
console.log(r1);
newArray[k]=r1;
k++;
for(i=0;i<s1.length;i++)
{
    var s2="*"+s1[i]+"*";
    newArray[k]=s2;
    k++;
    console.log(s2);
}
for(i=0;i<=s1.length;i++){
r2=r2+"*";}
newArray[k]=r2;
console.log(r2);
document.getElementById("a").innerHTML=newArray;