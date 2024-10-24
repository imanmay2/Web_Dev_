// Trying with arr.forEach function.
let arr=[1,2,3,4,5,6,7,8];
print=function(el){
    console.log(el);
}


//creating an array with objects.
let arr1=[
    {
        name:"Anwesha",
        marks:94.4
    },{
        name:"Manmay",
        marks:98
    }
];

arr1.forEach(
    function(student){
        console.log(`${student.marks}`);
    }
)