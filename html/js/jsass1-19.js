function validate(e)
{
    var s=document.getElementById("display").innerHTML;
    var s1=e.innerHTML;
    document.getElementById("display").innerHTML=s+""+s1;
}
function calculate()
{
    var s=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=eval(s);
}
function clear1()
{
   var s=document.getElementById("display").innerHTML="";
}