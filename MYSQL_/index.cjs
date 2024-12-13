

const {faker}=require('@faker-js/faker');


 let data=()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}


// console.log(createRandomUser());


const mysql=require('mysql2');


const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"VIT",
    password:"Manmay@1234"
});



// q="INSERT INTO user VALUES(?,?,?)";
// users1=["imanmay2","hello@gmail.com","1234"];

q="INSERT INTO  user VALUES ?";
data_=[]
for(let i=0;i<1000;i++){
    data_.push(data());
}

connection.query(q,[data_],(err,res)=>{
    console.log("Data Updated Successfully in the database.");
});

connection.end();