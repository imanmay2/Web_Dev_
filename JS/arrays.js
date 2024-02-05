// Print all the elements in an array.

let arr=[1,2,3,4,5,6,7,8,0];
console.log("Elemenst are as follows : ");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}






// Average marks of the marks in an created array.
let marks=[91,92,93,94,95,96];
let s=0;
for(let i of marks){
    console.log(i);
    s+=i;
    console.log("S", s)
}
let avg=s/marks.length;
console.log("Average marks of the marks : ",avg);



// Given an array of prices . Appply 30% OFF on each item and print the array.
let arr=[250,645,300,900,50];
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]*0.90;
}
console.log("The array after applying 10% OFF is : \n ", arr);


// array methods ....
// 1. concat()  : It helps to join the 2 existing arrays.
//2. unshift()  : it helps to push item from the beginning of the array
//3. shift() :    it helps to pop  the element/item from the beginning of the array and return the element. 
//4. slice() ; 
//5. splice(start_index, delete_count,replacing_items) : function name and parameters itself are self explaining.
//6. pop() : it will remove an element from the end of the array and returns the popped value
//7. push : it will insert an element in the array from the ending.



//// Create a array which stroes companies , Bloomberg,Microsoft,Uber, Google,IBM, Netflix
let arr_comp=["Bloomberg","Microsoft","Uber", "Google","IBM", "Netflix"];
// i) remove the first company from the array of companies from the elements.
arr_comp.shift();
console.log(`Updated array is : ${arr_comp}`);

//ii) Remove ola and add uber and add ola in its place.
arr_comp.splice(1,1,"Ola");
console.log(`Updated array is : ${arr_comp}`);


//iii) Add amazon at the end;
arr_comp.push("Amazon");
console.log("Updated array is : ",arr_comp);
 