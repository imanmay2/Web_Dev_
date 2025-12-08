let arr=[1,2,3,4,5];
let ask=arr.includes(4);
console.log(ask);

let ele1=arr.shift();
console.log(ele1);

arr.reverse();
console.log(arr);


let str="anwesha";
for(let i of str){
    console.log(i);
}

let help=()=>{
    console.log("SAVE ME!!!!");
}

// setInterval(help,2000);


let double=arr.map((ele)=>{
    return ele*2;
})
console.log(double);

let ans=arr.filter((ele)=>{
    return ele%2==0;
});


console.log(ans);
console.log(arr);