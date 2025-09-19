"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateAverage = function (marks) {
    var sum = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var i = marks_1[_i];
        if (i == "Absent") {
            continue;
        }
        sum = sum + i;
    }
    return sum / marks.length;
};
var students = [
    {
        id: 1,
        name: "Alice",
        marks: [85, 90, 78, "Absent", 92],
    },
    {
        id: 2,
        name: "Bob",
        marks: [70, 65, 80, 75, 68],
    },
    {
        id: 3,
        name: "Charlie",
        marks: [88, "Absent", 95, 91, 89],
    },
];
var avgMarks = [];
//print the names along with the average scores of the subjects.
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var i = students_1[_i];
    var avgMarks_ = 0;
    console.log(i.name + "is having Average score of " + calculateAverage(i.marks));
    avgMarks.push(calculateAverage(i.marks));
}
//now finding the topper.
var max = 0;
var idx = -1;
var k = -1;
for (var _a = 0, avgMarks_1 = avgMarks; _a < avgMarks_1.length; _a++) {
    var i = avgMarks_1[_a];
    k++;
    if (max < i) {
        idx = k; //storing the index so as to find the name.
    }
}
console.log(students[idx].name + " is having the highest average marks with : " + avgMarks[idx]);
