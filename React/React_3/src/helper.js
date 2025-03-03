function Random(n){
    let arr=[];
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function winningCondition(arr,s){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }

    if(sum==s){
        return true;
    }
    return false;
}
export {Random,winningCondition};