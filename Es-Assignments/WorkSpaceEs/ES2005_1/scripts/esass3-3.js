"use strict";
;
var circle = {
    name: "circle",
    print: function () {
        console.log(this.name);
    }
};
var employee = {
    name: "employ",
    age: Number = 29,
    print: function () {
        console.log(this.name + " " + this.age);
    }
};
function printAll() {
    var aa = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        aa[_i] = arguments[_i];
    }
    for (var _a = 0, aa_1 = aa; _a < aa_1.length; _a++) {
        var i = aa_1[_a];
        i.print();
    }
}
printAll(circle, employee);
//# sourceMappingURL=esass3-3.js.map