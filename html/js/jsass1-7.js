var convert=function()
{
    var rupee=document.getElementById("rupee").value;
    document.getElementById("yen").value=rupee*1.4853;
    document.getElementById("euro").value=rupee*0.0115;
    document.getElementById("pound").value=rupee*0.2116;
}