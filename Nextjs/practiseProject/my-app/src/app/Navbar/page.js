import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <h1>Welcome to our app. </h1>

        <Link href="/About">About</Link>
        <Link href="/profile">Profile</Link>
        </>
    )
}