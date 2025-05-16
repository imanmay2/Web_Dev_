import "./Newsletter.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function NewsLetter() {
    return (
        <div className="main">
            <div className="header">
                <div className="text"> News you can Trust.</div>
            </div>
            <div className="section">
                <br />
                <font className="bold_">Stay up to date with the Latest!</font> <br />
                Subscribe to our newsletter for the latest news straight into your inbox. <br /> <br />
                <div className="email">
                    
                </div> <br /> <br />
                <Button variant="contained" className="size_ color_btn">Contained</Button> <br /><br />
                We value your privacy
            </div>
        </div>
    )
}

export { NewsLetter }