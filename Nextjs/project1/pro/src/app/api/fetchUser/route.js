const { NextResponse } = require("next/server");

export async function GET(){
    let data={
        name:"Anwesha Jana",
        Age:21,
    }

    return NextResponse.json(data);
};