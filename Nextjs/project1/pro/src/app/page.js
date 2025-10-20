 "use client"
 
 export default function Home() {
  let fetch_=async()=>{
    let data={
      name:"Manmay",
      role:"Backend Developer"
    }


    let a=await fetch("/api/getUser",{
      method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
    })
    let res=await a.json();
    console.log(res);
  }


  const fetch2_=async()=>{
    let a=await fetch("/api/getUser",{
      method:"GET",headers:{"Content-Type":"application/json"}
    })

    let res=await a.json();
    console.log(res);
  }

  return (
    <>
    Next.js API routes.
   <button onClick={fetch2_}>Fetch</button>
    </>
  )
}