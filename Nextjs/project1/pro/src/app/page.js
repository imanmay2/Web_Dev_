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

  const fetchData=async()=>{
    let a=await fetch("/api/fetchUser",{
      method:"GET",headers:{
        "Content-Type":"application/json",
      },
    })

    let res=await a.json();
    console.log("Data fetched from backend is : ");
    console.log(res);
  }



  const postData=async()=>{

    let data={name:"aNwEsHA JaNA",age:21};
    let fetch_=await fetch("/api/postUser",{method:"POST",headers:{"Content-Type":"application/json"},

      body:JSON.stringify(data)
    });

    let res=await fetch_.json();

    console.log("Data from server : "+res.name);
  }

  return (
    <>
    Next.js API routes.
   <button onClick={postData}>Fetch</button>
    </>
  )
}