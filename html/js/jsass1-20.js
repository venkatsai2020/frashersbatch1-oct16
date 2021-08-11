function help(obj)
{
    var s=obj.name;
    if(s=="name")
    {
        document.getElementById("text_area").innerHTML="Enter your Name";
    }
    else if(s=="email")
    {
        document.getElementById("text_area").innerHTML="Enter your Personal Email";
    }
    else if(s=="address")
    {
        document.getElementById("text_area").innerHTML="Enter current Address to deliver Pizza!";
    }
}
function help1()
{
    document.getElementById("text_area").innerHTML="This TEXTAREA provides context-senesitive help.Click on any inout field or use the TAB key to get more information about the input field.";
}
function clear1()
{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    var checkboxes=document.getElementsByName("toppings");
    clear(checkboxes);
    var radios=document.getElementsByName("get");
    clear(radios);
    var s=document.getElementById("tip").getElementsByTagName("option");
    clear2(s);
    document.getElementById("address").value="";
}
function clear(newArray)
{
    var len=newArray.length;
    for(i=0;i<len;i++)
    {
        if(newArray[i].checked==true)
        newArray[i].checked=false;
    }
}
function clear2(newArray)
{
    newArray[0].selected=true;
}