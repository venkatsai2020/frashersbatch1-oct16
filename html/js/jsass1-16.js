function table1(){
var tab=document.getElementById("tab");
var rows=document.getElementById("rows").value;
var col=document.getElementById("col").value;
for(i=1;i<=rows;i++)
    {
       var tr=document.createElement("tr");
        for(j=1;j<=col;j++)
        {
            var td=document.createElement("td");
            var text=document.createTextNode("col"+j);
            td.appendChild(text);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }
}