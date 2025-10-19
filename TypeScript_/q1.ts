type Student={
    readonly id:number,
    name:string,
    marks:(number | "Absent")[]
}


let calculateAverage=(marks:(number|"Absent")[]):number=>{
    let sum=0;
    for(let i of marks){
        if(i=="Absent"){
            continue;
        }
        sum=sum+i;
    }return sum/marks.length;
}


const students: Student[] = [
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

let avgMarks:number[]=[];
//print the names along with the average scores of the subjects.
for(let i of students){
    let avgMarks_=0;
    console.log(i.name+"is having Average score of "+calculateAverage(i.marks));
    avgMarks.push(calculateAverage(i.marks));
}


//now finding the topper.
let max=0;
let idx=-1;
let k=-1;
for(let i of avgMarks){
    k++;
    if(max<i){
        idx=k; //storing the index so as to find the name.
    }
}

console.log(students[idx].name+" is having the highest average marks with : "+avgMarks[idx]);




export {};