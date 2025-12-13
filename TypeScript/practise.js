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
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] + " ");
        }
        console.log();
    }
};
var arr12 = [];
var funcSee = function (obj) {
    console.log("Name of the customer is : " + obj.custName);
    console.log("Age of the customer : " + obj.age);
    console.log("Address where he lives : " + obj.address);
    if (obj.pin) {
        console.log("Pin details : " + obj.pin);
    }
    else {
        console.log("Pin details not found!!");
    }
};
funcSee({ custName: "Anwesha", age: 12, address: "Raiganj", pin: 733134 });
//Classes & Objects in Typescript.
var User = /** @class */ (function () {
    function User(email, name) {
        this.courseCount = 1;
        this.email = email;
        this.name = name;
    }
    Object.defineProperty(User.prototype, "getUserEmail", {
        get: function () {
            return "Email is : " + this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getUserName", {
        get: function () {
            return "Name of the user is : " + this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (courseCount) {
            if (courseCount <= 1) {
                console.log("Course Count is set to 1");
                return;
            }
            courseCount++;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this.courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var manmay = new User("imanmay2@gmail.com", "Manmay");
console.log(manmay.getCourseCount);
console.log(manmay.getUserEmail);
console.log(manmay.getUserName);
manmay.setCourseCount;
console.log(manmay.getCourseCount);
//dealing with generics
function printGen(num) {
    // console.log("Number is "+num);
    return num;
}
var arrowGen = function (val1, val2) {
    console.log("Values are : " + val1 + " " + val2);
};
var printObj_ = function (val1, val2) {
    return { val1: val1, val2: val2 };
};
console.log(printObj_(24, { username: "imanmay2", password: "postgreSQL@123" }));
console.log(typeof ("welcome"));
//dealing with Type Narrowing.
var typeNarrow = function (val) {
    if (typeof (val) === "object") {
        for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
            var i = val_1[_i];
            console.log("Element is : " + i);
        }
        console.log();
    }
    else {
        console.log("String is : " + val);
    }
};
typeNarrow([1, 2, 3, 4]);
console.log();
typeNarrow("Anwesha");
