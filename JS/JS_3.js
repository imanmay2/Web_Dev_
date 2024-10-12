let str1="   msg!  ";
alert(`String after triming and uppercase is  :  ${str1.trim().toUpperCase()}`);

let str2="College";
alert(`String after replacing ${str2.replace('l','t')}`);

let month=["January","July","March","August"];
month[0]="July";
month[1]="June";
console.log(month);


let arr_=['C','C++','HTML','Javascript','Python','Java','C#','SQL']
arr_=arr_.reverse();
console.log(arr_);
console.log(`Index of Javascript is : ${arr_.indexOf('Javascript')}`);
