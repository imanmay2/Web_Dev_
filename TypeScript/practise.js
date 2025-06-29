"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSum(num) {
    return num + num;
}
var getSum2 = function (num, num2) {
    if (num2 === void 0) { num2 = 5; }
    console.log(num * num2);
};
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.map(function (num) {
    console.log(num + " ");
});
console.log(getSum(4));
getSum2(4);
function createUser(user) {
    return { username: user.username, email: user.email, age: user.age };
}
var usercreated = createUser({ username: "imanmay2", email: "imanmay2@gmail.com", age: 21 });
console.log(usercreated);
