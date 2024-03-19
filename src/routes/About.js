// Importing necessary components and assets
import Hero from "../Components/Hero"; // Importing the Hero component from "../Components/Hero.js"
import Navbar from "../Components/Navbar"; // Importing the Navbar component from "../Components/Navbar.js"
import AboutImg from "../assets/about.jpg"; // Importing the image asset for the About page
import Footer from "../Components/Footer"; // Importing the Footer component from "../Components/Footer.js"
import AboutUs from "../Components/AboutUs"; // Importing the AboutUs component from "../Components/AboutUs.js"

// Defining the About functional component
function About (){
    return(
        <>
        {/* Rendering the Navbar component */}
        <Navbar/>

        {/* Rendering the Hero component */}
        <Hero
            cName = "hero-mid" // Custom class name for styling
            heroImg ={AboutImg} // Setting the background image for the hero section
            title = "About" // Title for the hero section
            btnClass = "hide" // CSS class to hide a button, if any
        />

        {/* Rendering the AboutUs component */}
        <AboutUs />

        {/* Rendering the Footer component */}
        <Footer />
        </>
    )
}

// Exporting the About component as the default export
export default About;
