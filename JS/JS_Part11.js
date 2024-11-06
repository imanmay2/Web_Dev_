// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();



//CallBack hell.
let h1=document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);

// function colorChange(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);
// };

// colorChange("red",1000,()=>{
//     colorChange("green",1000,()=>{
//         colorChange("blue",1000);
//     });
// });


//Callback hell 2----Example.
function dB(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

dB("hello",()=>{
    console.log("Success : Data Saved Successfully.");
    dB("hey",()=>{
        console.log("Success2 : Data Saved Suucessfully.");
    },()=>{
        console.log("Failure2 : Data failed Successfully");
    });
},()=>{
    console.log("Failure : Data failed to upload! ");
});