"use client"

import { usePathname } from "next/navigation";

export default function Navbar(){
    let path=usePathname();
    return(
        <div>Welcome to the Navbar.  You are in : {path}</div>
        
    )
}