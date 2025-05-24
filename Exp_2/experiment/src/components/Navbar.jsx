import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div>
            <nav>
                
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Login"><li>Login</li></Link>
                    <Link><li>Profile</li></Link>
             
            </nav>
        </div>
    )
}

export {Navbar};