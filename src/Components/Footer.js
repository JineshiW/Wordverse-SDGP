// Importing the CSS file for styling
import "./FooterStyle.css"

// Defining the Footer component
const Footer = () =>{
    return(
        // Main container for the footer
        <div className="footer">
            <div className="top">
                {/* Left section containing the title and description */}
                <div>
                    <h1>WordVerse</h1>
                    <p>Level up your Language skills through the continuous learning.</p>
                </div>
                {/* Right section containing social media icons */}
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
             {/* Bottom section of the footer */}
            <div className="bottom">
                <div>
                    <h4>Courses</h4>
                    <a href ="/">English</a>
                    <a href ="/">Dutch</a>
                    <a href ="/">Chinese</a>
                    <a href ="/">French</a>
                </div>
                 {/* Section for community links */}
                <div>
                    <h4>Community</h4>
                    <a href ="/">GitHub</a>
                    <a href ="/">Issues</a>
                    <a href ="/">Project</a>
                    <a href ="/">Twitter</a>
                </div>
                 {/* Section for help links */}
                <div>
                    <h4>Help</h4>
                    <a href ="/">Support</a>
                    <a href ="/">Troubles</a>
                    <a href ="/">Chat</a>
                    <a href ="/">Contact us</a>
                </div>
                 {/* Section for other links */}
                <div>
                    <h4>Others</h4>
                    <a href ="/">Terms of Service</a>
                    <a href ="/">Privacy</a>
                    <a href ="/">Policy</a>
                    <a href ="/">License</a>
                </div>
            </div>

        </div>
    )
}
// Exporting the Footer component
export default Footer