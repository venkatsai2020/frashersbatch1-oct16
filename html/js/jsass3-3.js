var Rectangle=function(width,height)
{
    this.height=height;
    this.width=width;
    this.getArea=function()
    {
        return this.width*this.height;
    };
}
var rect= new Rectangle(2,10);
document.write("height of rectangle : "+rect.height);
document.write("<br>");
document.write("widht of rectangle : "+rect.width);
var area=rect.getArea();
document.write("<br>");
document.write("Area of Rectangle : "+area); 