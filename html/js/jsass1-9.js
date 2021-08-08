var array1=["a","b","c","d","e"];
var array2=[1,2];
var array3=new Array();
var k=0,count=0;
if(array1.length<=array2.length){
for(i=0;i<array1.length;i++){
array3[k]=array1[i];
k++;
array3[k]=array2[i];
k++;
count++;
}
for(i=count;i<array2.length;i++){
array3[k]=array2[i];
k++;
}
}
else{
    for(i=0;i<array2.length;i++){
        array3[k]=array1[i];
        k++;
        array3[k]=array2[i];
        k++;
        count++;
        }
        for(i=count;i<array1.length;i++){
        array3[k]=array1[i]
        k++;
}
}
document.getElementById("a").innerHTML=array3;