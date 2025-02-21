import './App.css'

let submit=(event)=>{
  event.preventDefault();
  console.log("Form Submitted");
}

export default function App(){
  return (
    <form onSubmit={submit}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}