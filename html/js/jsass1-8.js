var array1=["a","b","c"];
var array2=[1,2,3];
var array3=new Array();
var k=0;
for(i=0;i<array1.length;i++){
array3[k]=array1[i];
k++;
}
for(i=0;i<array2.length;i++){
    array3[k]=array2[i];
    k++;
 }
 document.getElementById("a").innerHTML=array3;