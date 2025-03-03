function Random(n){
    let arr=[];
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}
export {Random};