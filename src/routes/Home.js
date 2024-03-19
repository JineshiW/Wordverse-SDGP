// Importing necessary components and assets
import Destination from "../Components/Destination"; // Importing the Destination component from "../Components/Destination.js"
import Footer from "../Components/Footer"; // Importing the Footer component from "../Components/Footer.js"
import Hero from "../Components/Hero"; // Importing the Hero component from "../Components/Hero.js"
import Navbar from "../Components/Navbar"; // Importing the Navbar component from "../Components/Navbar.js"
import Course from "../Components/Course"; // Importing the Course component from "../Components/Course.js"
import HomeImg from "../assets/Home.jpg"; // Importing the image asset for the Home page

// Defining the Home functional component
function Home (){
    return(
        <>
        {/* Rendering the Navbar component */}
        <Navbar/>

        {/* Rendering the Hero component */}
        <Hero
            cName = "hero" // Custom class name for styling
            heroImg ={HomeImg} // Setting the background image for the hero section
            title = "Which Language do you want to learn" // Title for the hero section
            text = "Level up your Language skills through continuous learning." // Text content for the hero section
            buttonText ="View Courses" // Text for the button displayed in the hero section
            url = "/" // URL to navigate when the button is clicked (in this case, navigating to the home page)
            btnClass = "show" // CSS class to show the button
        />

        {/* Rendering the Destination component */}
        <Destination />

        {/* Rendering the Course component */}
        <Course />

        {/* Rendering the Footer component */}
        <Footer />
        </>
    )
}

// Exporting the Home component as the default export
export default Home;
