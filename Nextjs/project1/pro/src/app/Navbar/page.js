"use client"

import Link from "next/link";
function Navbar(){
  return(
    <>
    <div className="container">
      <div><Link href="/about">About</Link></div>
    </div>
    </>
  )
}

export default Navbar;