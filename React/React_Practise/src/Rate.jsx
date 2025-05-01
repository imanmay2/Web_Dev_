import "./Rate.css";

function Rate({rates}){
    return(
        <>
        <p> <font className="prev">&#8377;{rates[0]}</font> &nbsp;&nbsp;&nbsp;
         <font className="ori">&#8377;{rates[1]}</font></p>
        </>
    )
}

export {Rate};