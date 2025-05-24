import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div>
            <nav>
                <div className="navbar">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/Login"><li>Login</li></Link>
                    <Link><li>Profile</li></Link>
                </div>
            </nav>
        </div>
    )
}

export {Navbar};