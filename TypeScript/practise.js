"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var n = "anwesha";
console.log(n);
var num = 20.4567;
console.log(parseFloat(num.toFixed(2)));
//functions in typescript. 
function printData(name) {
    return ("Welcome to Typescript " + name);
}
//arrow functions.
var arrowFunc = function (name) {
    return ("Welcome to Typescript , You can do it alone " + name);
};
var str = printData("Manmay");
console.log(str);
console.log(arrowFunc("Lopa"));
//Arrays
var arr = ["Anwesha", "Shaktimaan", "Manmay", "Welcome"];
arr.map(function (ele) {
    console.log("Name is : " + ele);
});
//handling the error using never 
var handleError = function (errMsg) {
    try {
        throw new Error(errMsg);
    }
    catch (errMsg) {
        console.log(errMsg);
    }
};
handleError("Intensional Crash for trial period.");
