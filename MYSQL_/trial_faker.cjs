const { faker } = require('@faker-js/faker');

 let createRandomUser=()=>{
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

  console.log(createRandomUser());