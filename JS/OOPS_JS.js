class mammal{
    constructor(name){
        this.name=name;
        console.log("Parent Constructor is called. ");
        this.type="warm_blooded";
    }

    eat(){
        console.log("Hello, I am eating .");
    }
}


class dog extends mammal{
    constructor(name,color){
        console.log("Child Constructor is called !");
        super(name);
        this.color=color;
    }

    talk_name(){
        console.log("Hi, my name is : ",+name);
    }

    eat(){
        console.log("I am eating. ");
    }
}