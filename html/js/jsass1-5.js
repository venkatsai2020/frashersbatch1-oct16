var leapYear=function()
{
    var year1=document.getElementById("leap").value;
    var year=Number(year1);
    var value;
    if(year%4==0)
    value=year;
    else
    {
        value=year%4;
        value=year-value;
    }
    var newArray=new Array;
    for(i=0;i<20;i++)
    {
        value=value+4;
        newArray[i]=value;
        document.write(value);
        document.write('<br>');
    }
}