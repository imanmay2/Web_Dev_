var arr=[2,3,4,5,6,7,8];
c=0
arr.forEach(fun);
function fun(ele){
    c=0
    for(let i=1;i<=ele;i++){
        if (ele%i==0){
            c+=1;
        }
    }
    if (c==2){
        console.log(ele)
    }
}