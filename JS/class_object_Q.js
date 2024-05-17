//Q1. You are creating a website for your college.Create a class USER
// with 2 properties called viewData() that allows user to view website data.

let data="Hey !! It's a secret data";
class User
{
    constructor(Name,E_mail)
    {
        this.name=Name;
        this.email=E_mail;
    }
    viewData(){
        // console.log(" Name of the student is : ",name);
        // console.log("Email id of the student is : ",email);
        console.log(data);
    }
}

let student1=new User("Manmay","imanmay2@gmail.com");
let student2=new User("Anwesha","anweshaCahkraborty@gmail.com");



//Q2. Create a new class Admin which inherits from user. Add a new method called edit data that allows you to add website data.

class Admin extends User{
    constructor(Name,Email){
        super(Name,Email);
    }
    editData(){
        data="Hey!!! Data has been Changed by the admin";
        console.log(data);
    }
}

let admin1=new Admin("Germany","germany@gmail.com");
