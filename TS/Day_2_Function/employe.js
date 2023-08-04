"use strict";
function employee() {
    return "Hello Employee";
}
var a = function (param1, param2) {
    console.log("This is param 1: " + param1);
    console.log("This is param 2: " + param2);
};
a('Hey', 'Hello');
function sum(a, b) {
    let c = a + b;
    console.log(c);
}
sum(3, 4);
