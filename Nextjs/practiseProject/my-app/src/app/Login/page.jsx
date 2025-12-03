"use client"

import { useState } from "react";
export default function Login(){
    let [form,setForm]=useState({
        username:"",
        email:"",
        password:""
    });

    let handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };

    let submit=(e)=>{
        e.preventDefault();
        console.log("Form Data is : ");
        console.log("Name is : "+form.username);
        console.log("Email is : "+form.email);
        console.log("Password is : "+form.password);
        setForm({username:"",email:"",password:""});
    }

    return(
        <div>
            <center>
                <div>
                    <label htmlFor="user">Username</label>
                    <input type="text" id="user" name="username" value={form.username} onChange={handleChange}/> <br /> <br />

                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="email"  value={form.email} onChange={handleChange}/> <br /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"  value={form.password} onChange={handleChange}/> <br /> <br />

                    <button onClick={submit}>Submit</button>
                </div>
            </center>
        </div>
    )
}