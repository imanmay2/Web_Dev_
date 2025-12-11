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
var funcObj = function (userDetails) {
    var newObj = { n: "Anwesha", age: userDetails.age };
    return newObj;
};
var printObj = function (userDetails) {
    console.log("Name of the person is :  " + userDetails.n);
    console.log("Age is : " + userDetails.age);
};
printObj({ n: "Manmay", age: 24 });
var newObj = funcObj({ n: "Manmay", age: 24 });
printObj(newObj);
console.log("restarted");
console.log("restarted...");
console.log();
var myUser = {
    _id: "S123",
    name: "Manmay",
    age: 24
};
console.log(myUser._id);
console.log(myUser.name);
console.log(myUser.age);
console.log(myUser.licence);
//Arrays
var arr1 = [];
for (var i = 1; i <= 8; i++) {
    arr1.push(i);
}
var displayArr = function (arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log(i);
    }
};
console.log("Elements in the array are follows : ");
displayArr(arr1);
//array of objects .
var arrObj = [];
arrObj.push({ n: "Anwesha", age: 21 });
console.log(arrObj[0].n);
console.log(arrObj[0].age);
// 2D array in typescript.
var arr2DFunc = function (arr) {
    for (var i = 1; i <= 3; i++) {
        arr[i] = [];
        for (var j = 1; j <= 3; j++) {
            arr[i].push(j);
        }
    }
};
var funcPrint2D = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] + " ");
        }
        console.log();
    }
};
var arr12 = [];
console.log("2D array is as follows : ");
arr2DFunc(arr12);
console.log("wec");
funcPrint2D(arr12);
