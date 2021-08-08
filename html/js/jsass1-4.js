var head=function(num1)
{
    var prop=1-(1/(Math.pow(2,num1)));
    document.getElementById("a").innerHTML="probability of atleast on head is : "+prop;
}
function p(){
    var num=document.getElementById("flip").value;
    head(num);
}