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
    var checkboxes=document.getElementsByName("toppings1");
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
var name_value;
var email_value;
var toppings_value;
var delivery_vlaue;
var tip_value;
var address_value;
var total;
var fee;
var tppfee;
function submit_1(){
    var name1=document.getElementById("name");
    var name2=name1.value;
    if(name2=="")
    {
        name1.focus();
        document.getElementById("text_area").innerHTML="Name is Mandatory";
        return false;
    }
    name_value=name2;
    var email1=document.getElementById("email");
    var email2=email1.value;
    var email3=emailvalid(email2);
    if(email2==""||email3==-1)
    {
        email1.focus();
        if(email3==-1)
        alert("enter valid email Id");
        document.getElementById("text_area").innerHTML="Email is Mandatory";
        return false;
    }
    email_value=email2;
    var get1=document.getElementsByName("get");
    var pos=position_1(get1);
    if(pos==-1)
    {
        for(i=0;i<get1.length;i++)
        get1[i].focus();
        document.getElementById("text_area").innerHTML="Select either Home Delivery or PickUp";
        return false;
    }
    delivery_vlaue=document.getElementsByClassName("get")[pos].innerHTML;
    var tip1=document.getElementById("tip").getElementsByTagName("option");
    var pos1=position_2(tip1);
    if(pos1==-1)
    {
        document.getElementById("tip");
        document.getElementById("text_area").innerHTML="Tip is Mandatory";
        return false;
    }
    tip_value=tip1[pos1].innerHTML;
    var address1=document.getElementById("address");
    var address2=address1.value;
    if(address2=="")
    {
        address1.focus();
        document.getElementById("text_area").innerHTML="Address is Mandatory";
        return false;
    }
    address_value=address2;
    var nooftopp=-1;
    var aa=toppingscheck();
    if(aa.length==0){
    toppings_value="None";
    nooftopp=0;
    }
    else{
    toppings_value=aa;
    nooftopp=aa.length;
    }
    if(pos==0)
    fee=5;
    else
    fee=0;
    if(tip_value=="none")
    tppfee=0;
    else
    tppfee=Number(tip_value.substring(0,tip_value.length-1));
    total=(10+1.5*nooftopp+fee)*1.0+(tppfee/100);
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
       return i;
   }
   return -1;
}
function position_2(newArray1)
{
    var len=newArray1.length;
   for(i=1;i<len;i++)
   {
       if(newArray1[i].selected==true)
       return i;
   }
   return -1;
}
function emailvalid(email_1)
{
    return email_1.indexOf("@");
}
function toppingscheck()
{
    var s=document.getElementsByName("toppings1");
    var topparray=new Array();
    var count=0;
    for(i=0;i<s.length;i++)
    {
        if(s[i].checked==true)
        {
            var ab=document.getElementsByClassName('toppings')[i].innerHTML;
            topparray[count]=ab.substring(0,ab.length-1);
            count++;
        }
    }
    return topparray;
}
function summary1(){
    document.write("<table border='1'; width=40%; >");
    document.write("<tr>");
    document.write("<td>Name</td>");
    document.write(`<td>${name_value}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Email</td>");
    document.write(`<td>${email_value}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Toppings</td>");
    document.write(`<td>${toppings_value}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Delivery Type</td>");
    document.write(`<td>${delivery_vlaue}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Tip</td>");
    document.write(`<td>${tip_value}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Address</td>");
    document.write(`<td>${address_value}</td>`);
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Total Cost</td>");
    document.write(`<td>${total}Rs</td>`);
    document.write("</tr>");
    document.write("</table>");
}