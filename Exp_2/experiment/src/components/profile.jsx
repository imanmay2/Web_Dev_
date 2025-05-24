import { useParams } from "react-router-dom";
function Profile(){
    const params=useParams();
    return (
        <div>
            This is a Profile of {params.username}
        </div>
    )
}
export {Profile};

