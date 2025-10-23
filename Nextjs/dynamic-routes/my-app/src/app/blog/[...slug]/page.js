export default async function pages({params}){

    // throw new error("h");
    console.log(await params);
    let {slug}=await params;
    return(
        <div>Hello : {slug}</div>
    );
}