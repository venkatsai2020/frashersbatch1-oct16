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
    else if(s=="tip")
    {
        document.getElementById("text_area").innerHTML="Tip for Service";
    }
}
function help1()
{
    document.getElementById("text_area").innerHTML="This TEXTAREA provides context-senesitive help.Click on any inout field or use the TAB key to get more information about the input field.";
}
function clear1()
{
    document.getElementById("text_area").innerHTML="This TEXTAREA provides context-senesitive help.Click on any inout field or use the TAB key to get more information about the input field.";
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
var name_value="";
function submit_1(){
    var name1=document.getElementById("name");
    var name2=name1.value;
    if(name2=="")
    {
        name1.focus();
        document.getElementById("text_area").innerHTML="Name is Mandatory";
        return false;
    }
    var email1=document.getElementById("email");
    var email2=email1.value;
    if(email2=="")
    {
        email1.focus();
        document.getElementById("text_area").innerHTML="Email is Mandatory";
        return false;
    }
    var get1=document.getElementsByName("get");
    var pos=position_1(get1);
    if(pos==-1)
    {
        for(i=0;i<get1.length;i++)
        get1[i].focus();
        document.getElementById("text_area").innerHTML="Select either Delivery or PickUp";
        return false;
    }
    var tip1=document.getElementById("tip").getElementsByTagName("option");
    var pos1=position_2(tip1);
    if(pos1==-1)
    {
        document.getElementById("tip");
        document.getElementById("text_area").innerHTML="Tip is Mandatory";
        return false;
    }
    var address1=document.getElementById("address");
    var address2=address1.value;
    if(address2=="")
    {
        address1.focus();
        document.getElementById("text_area").innerHTML="Address is Mandatory";
        return false;
    }
   var s=document.getElementById("summary");
   s.disabled=false;
   clear1();
}
function position_1(newArray1)
{
    var len=newArray1.length;
   for(i=0;i<len;i++)
   {
       if(newArray1[i].checked==true)
       return 1;
   }
   return -1;
}
function position_2(newArray1)
{
    var len=newArray1.length;
   for(i=1;i<len;i++)
   {
       if(newArray1[i].selected==true)
       return 1;
   }
   return -1;
}
function summary(){

}