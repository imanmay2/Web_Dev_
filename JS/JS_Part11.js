function one(){
    return 1;
}


function two(){
    return one()+one();
}

function three(){
    let ans=two()+one();
    console.log(ans);
}
three();



// CallBack hell.
let h1=document.querySelector("h1");
setTimeout(()=>{
    h1.style.color="red";
},1000);
setTimeout(()=>{
    h1.style.color="green";
},2000);
setTimeout(()=>{
    h1.style.color="blue";
},3000);



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


//Callback hell 2----Example.
function dB(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
};


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


function saveDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("Success: Data was saved!");
        }
        else{
            reject("Failed: Data Entry Failed!");
        }
    });
}

saveDB("Data1")
.then((result)=>{
    console.log("Data1 saved!");
    console.log(result);
    return saveDB("Data2");
})
.then((result)=>{
    console.log("Data2 saved!");
    console.log(result);
    return saveDB("Data3");
})
.then((result)=>{
    console.log("Data3 saved!");
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});



// Using Promises for the Color Problem.
let h1=document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color changed successfully1");
        },delay);
    });
};


colorChange("red",1000)
.then((result)=>{
    console.log(result);
    return colorChange("green",1000);
})
.then((result)=>{
    console.log(result);
    return colorChange("Blue",1000);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})