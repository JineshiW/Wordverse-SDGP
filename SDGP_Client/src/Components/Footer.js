import "./FooterStyle.css"
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1 >WordVerse</h1>
                    <p>Level up your Language skills through the continuous learning.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Courses</h4>
                    <a href ="/">English</a>
                    <a href ="/">Dutch</a>
                    <a href ="/">Chinese</a>
                    <a href ="/">French</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href ="/">GitHub</a>
                    <a href ="/">Issues</a>
                    <a href ="/">Project</a>
                    <a href ="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href ="/">Support</a>
                    <a href ="/">Troubles</a>
                    <a href ="/">Chat</a>
                    <a href ="/">Contact us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href ="/">Terms of Service</a>
                    <a href ="/">Privacy</a>
                    <a href ="/">Policy</a>
                    <a href ="/">License</a>
                </div>
                <div>
                    <Link to={`http://localhost:3002`} className="btn">
                        <span class="icon"></span> 
                        <span class="text"><b>Chat with Me!</b></span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer