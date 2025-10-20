import { NextResponse } from "next/server";


export async function POST(req){
    let data=await req.json();
    console.log("Data Received..");
    return NextResponse.json(data);
}


export async function GET(){
    let data={
        name:"Anwesha Chakraborty",
        role : "Frontend Developer"
    }

    console.log("GET Request.");
    return NextResponse.json(data);
}