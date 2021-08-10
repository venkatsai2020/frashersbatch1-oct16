var Person= new Object();
Person.fistName="venkat";
Person.lastName="sai";
Person.fullName=function()
{
    return this.fistName+" "+this.lastName;
};
var name=Person.fullName();
document.write("Fullname: "+name);
document.write("<br>");
document.write("Last name: "+Person.lastName);