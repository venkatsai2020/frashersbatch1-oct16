"use strict";
var arrayObject = new Array();
var names = ['Tom', 'lvan', 'Jerry'];
for (var i in names) {
    var array = {
        name: names[i],
        length: names[i].length
    };
    arrayObject[i] = array;
}
console.log(arrayObject);
//# sourceMappingURL=esass1-4.js.map