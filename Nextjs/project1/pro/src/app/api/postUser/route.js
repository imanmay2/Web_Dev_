import { NextResponse } from "next/server";

export async  function POST(req){
    let data=await req.json();

    console.log("Got from POST request : \n");
    console.log(data);

    return NextResponse.json({'name':data.name});
}