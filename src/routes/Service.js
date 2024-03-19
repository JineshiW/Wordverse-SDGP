// Importing necessary components and assets
import Hero from "../Components/Hero"; // Importing the Hero component from "../Components/Hero.js"
import Navbar from "../Components/Navbar"; // Importing the Navbar component from "../Components/Navbar.js"
import AboutImg from "../assets/course.jpg"; // Importing the image asset for the Course page
import Footer from "../Components/Footer"; // Importing the Footer component from "../Components/Footer.js"
import Course from "../Components/Course"; // Importing the Course component from "../Components/Course.js"

// Defining the CoursePage functional component
function CoursePage() {
    return (
        <>
            {/* Rendering the Navbar component */}
            <Navbar />

            {/* Rendering the Hero component */}
            <Hero
                cName="hero-mid" // Custom class name for styling
                heroImg={AboutImg} // Setting the background image for the hero section
                title="Language Learning" // Title for the hero section
                btnClass="hide" // CSS class to hide a button, if any
            />

            {/* Rendering the Course component */}
            <Course />

            {/* Rendering the Footer component */}
            <Footer />
        </>
    )
}

// Exporting the CoursePage component as the default export
export default CoursePage;
