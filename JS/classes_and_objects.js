// Lets start with object....


const student={
    f_name:"Anwesha Chakraborty",
    marks:94.8,
    printMarks(){
        console.log(this.marks);
    }
}






// creating own prototype
const Employee={
    Tax(){
        console.log("Tax is 10%");
    }
}

const manmay={
    salary:550000,
    Tax(){
        console.log("Tax is 20%");
    }
};
manmay.__proto__=Employee;



//CLASSES

class car{
    constructor(brand){
        console.log("Constrctor has been executed");
        this.brand=brand;
    }
    setBrand(brand){
        this.brand=brand;
        console.log(brand);
    }
    start(){
        console.log("Started");
    }
    stop(){
        console.log("Stopped");
    }
}

let bmw=new car();
bmw.setBrand("Germany");


let nexus=new car();
nexus.setBrand("Germany");




//Inheritance

class Person{
    constructor(){
        this.species="Homosapiens";
        console.log("Entered in Parent Class");
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("Entered in child Class");
        super();
        this.branch=branch;
        console.log("Exit");

    }
    work(branch){
        // this.eng_branch=branch;
        super.eat();
        console.log("Building Projects and Programming with my Teammates in ",branch);
    }
    
}

let Eng= new Engineer();
Eng.work("Computer Engineering");