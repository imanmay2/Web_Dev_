// Lets learn string in javasript....

// // Q1. Count the letters present in the string.
let str="Germany";
console.log("Count of the string is  : ",str.length);


//Q2. Use the shorcut expression to print something from an object.
let obj= {
    object:"Macbook Air",
    price : "80000"
};



// use back text  for shortcut.
output=`I have purchased ${obj.object} and  \n it costed around ${obj.price} `;
console.log(output);



// UPPERCASE, LOWERCASE AND TRIM
let str='   GERMANY     '; 
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());




// slicing , concatenation, index,replace
let str='germany';
console.log(str.slice(0,3));
console.log(str.concat(" Europe"));
console.log(str.charAt(4));
console.log(str.replace("g","G"));      // it will replace only the first matching character.
console.log(str.replaceAll("g","G"));   // it will replace all the matching character.



//                                      PRACTISE Q

// Q1. Prompt the user to enter their full name. Generate a username from them on the input.
//     Start username with@, followed by their name and ending with the fullname length.


let _name=prompt("ENTER YOUR NAME : ");
let str="@"+_name.concat(_name.length);
console.log(`Username is : \n ${str}`);