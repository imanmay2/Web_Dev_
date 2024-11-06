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

function colorChange(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange){
            nextColorChange();
        }
    },delay);
};

colorChange("red",1000,()=>{
    colorChange("green",1000,()=>{
        colorChange("blue",1000);
    });
});