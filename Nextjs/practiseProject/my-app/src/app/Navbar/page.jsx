"use client"

import Link from "next/link";
import { useState } from "react";
export default function Navbar(){
    let [count,setCount]=useState(0);
    let increase=()=>{
        setCount(count+1);
        console.log(count);
    }
    return(
        <>
        <h1>Welcome to our app.</h1>
        <Link href="/About">About</Link> <br />
        <Link href="/profile">Profile</Link> <br />
        <Link href="/Login">Login</Link> <br />
        <p>Count is : {count}</p>
        <button onClick={increase}>Click</button>
        </>
    )
}