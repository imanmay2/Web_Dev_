// for(let i=1;i<=8;i++){
//     console.log("hello",i);
// }

// console.log(" Program Terminated! ");


// console.log(process.argv);


args=process.argv;
for(let i=2;i<=args.length-1;i++){
    console.log("Hello, Welcome "+args[i]);
}