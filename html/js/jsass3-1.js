var Rectangle=new Object();
Rectangle.width=10;
Rectangle.height=20;
Rectangle.area=function()
{
    return this.width*this.height;
}
Rectangle.set=function(width,height)
{
    this.width=width;
    this.height=height;
}
var area=Rectangle.area();
document.write(area);
document.write(Rectangle.width);
document.write("<br>");
document.write(Rectangle.height);
document.write("<br>");
Rectangle.set(5,10);
var area1=Rectangle.area();
document.write("<br>");
document.write(area1);