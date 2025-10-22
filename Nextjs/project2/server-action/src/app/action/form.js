"use server"

import fs from 'fs/promises';
export default async function handleSubmit(formData){
  let name=formData.get("name");
  let address=formData.get("add");

  console.log(name + address);

  await fs.writeFile("anwesha.txt","Hey i am Anwesha Chakraborty.","utf-8");
  let a= await fs.readFile("anwesha.txt","utf-8");
  console.log(a);
}